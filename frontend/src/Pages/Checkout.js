import React from 'react';
import './Checkout.css';
import { useStateValue} from '../Context/ContextProvider';
import SubTotal from '../Components/SubTotal';
import CheckoutProduct from '../Components/CheckoutProduct';
function Checkout() {
	const [{basket, user}] = useStateValue();
	return (
		<div className='checkout'>
			<div className='checkout__left'>
				<img 
					className='checkout__ad' 
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
					alt=''/>
				{basket?.length === 0 ? (
					<div>
						<h3>{user && `Hello, ${user.email}`}</h3>
						<h2 >Your Shopping basket is empty</h2>
						<p>You have no items in your basket. To Buy one or more items, please click "add to basket next to the item."</p>
					</div>):
				(
					<div>
						<h2 className='checkout__title'>Your Shopping Basket</h2>
						{basket.map(item => (
								<CheckoutProduct 
									{...item}
								/>
							)
						)}
					</div>	
				)
			}
			</div>
			{basket.length > 0 && (
				<div className='checkout__right'>
					<SubTotal />
				</div>

			)}
		</div>
	)
}

export default Checkout