import React from 'react';
import './Order.css';
import CheckoutProduct from '../Components/CheckoutProduct';
import {getBasketTotalPrice} from '../Context/reducer';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment'
function Order({order}) {
	return (
		<div className='order'>
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
			<p className='order__id'><small>{order.id}</small></p>
			{order.data.basket?.map(item => (
				<CheckoutProduct {...item} hiddenButton={true}/>
				))}

			<CurrencyFormat 
				renderText={(value) => (
				<p className='order__total'> Order Total <strong>{`${value}`}</strong></p>
				)}
				decimalState={2}
				value={order.data.amount/100}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
		</div>
	)
}

export default Order