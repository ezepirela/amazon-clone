import React from 'react';
import {useStateValue} from '../Context/ContextProvider';
import "./CheckoutProduct.css"
function CheckoutProduct({id, title, price, image, rating, hiddenButton}) {
	const [, dispatch] = useStateValue();
	function removeFromBasket () {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id
		});
	}
	return (
		<div className='checkoutproduct'>
			<img className='checkoutproduct__image'src={image} alt=''/>
			<div className='checkoutproduct__info'>
				<p className='checkoutproduct__title'>{title}</p>
				<p className='checkoutproduct__price'>
				<small>$</small><strong>{price}</strong>
				</p>
				<div className='checkoutproduct__rating'>
				{Array(rating).fill().map((_, i) => (
					<p>⭐</p>
					))}
				</div>
				{!hiddenButton && <button onClick={removeFromBasket}>Remove From Basket</button>}
			</div>
		</div>
	)
}

export default CheckoutProduct