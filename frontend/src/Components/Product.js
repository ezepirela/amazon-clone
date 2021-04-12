import React from 'react';
import { useStateValue} from '../Context/ContextProvider';
import './Product.css';
function Product({id, title, price, image, rating}) {
	const [, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id, 
				title,
				price,
				image,
				rating
			}
		});
	};
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='prodcut__price'><small>$<strong>{price}</strong></small></p>
				<div className='product__rating'>
					{
						Array(rating).fill().map((_, i) => (<p key={i}>⭐</p>))
					}
				</div>
			</div>
			<img src={image} alt=''/>
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	)
}

export default Product