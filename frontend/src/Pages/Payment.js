import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useStateValue } from '../Context/ContextProvider';
import CheckoutProduct from '../Components/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotalPrice} from '../Context/reducer';
import axios from '../axios';
import {db} from '../Firebase';
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './Payment.css';
function Payment() {
	const [{basket, user}, dispatch] = useStateValue();
	const history = useHistory();
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [processing, setProcessing] = useState(false);
	const [succeeded, setSucceeded] = useState("");
	const [clientSecret, setClientSecret] = useState(true);
	useEffect(() => {
		// when the objetc price changes, we'll call again use effect to get new secret key
		const getClientSecret = async () => {
			const response = await axios({
				method: 'POST',
				// stripe expects the money amount in subunits
				url: `payments/create?total=${getBasketTotalPrice(basket) *100}`
			});
			console.log(response.data.clientSecret)

			setClientSecret(response.data.clientSecret);
		};
		getClientSecret()
		console.log(clientSecret)
	}, [basket])

	const handleSubmit = async e => {
		e.preventDefault()
		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement)
			}
		}).then(({ paymentIntent }) => {
			db
			.collection('users')
			.doc(user?.uid)
			.collection('orders')
			.doc(paymentIntent.id)
			.set({
				basket: basket,
				amount: paymentIntent.amount,
				created: paymentIntent.created
			})
			setSucceeded(true);
			setProcessing(false);
			setError(null);
			dispatch({
				type: "CLEAN_BASKET"
			})
			history.replace('/orders');
		})
	};

	const handleChange = e => {
		// listen changes in the card element
		// display any errors as the customer types chair their card details
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	}

	return (
		<div className='payment'>
			<div className='payment__container'>
				<h1>
					Checkout (<Link to='/checkout'> {basket?.length} items</Link>)
				</h1>
				<section className='payment__section'>
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment__address'>
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</section>
				<section className='payment__section'>
					<div className='payment__title'>
						<h3>Review Items And Delivery</h3>
					</div>
					<div className='payment__items'>
						{basket.map(item => (
							 <CheckoutProduct 
								{...item}
							/>
						))}
					</div>
				</section>
				<section className='payment__section'>
					<div className='payment__title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment__details'>
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className='payment__priceContainer'>
								<CurrencyFormat 
									renderText={(value) => (
											<h3>Order Total: {value} </h3>
									)}
									decimalScale={2}
									value={getBasketTotalPrice(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button type='submit'disabled={processing || disabled || succeeded}> 
									<span>{processing? <p>processing</p> : 'Buy Now'} </span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Payment