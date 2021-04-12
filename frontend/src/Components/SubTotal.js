import React from 'react';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../Context/ContextProvider';
import {getBasketTotalPrice} from '../Context/reducer';
import {useHistory} from 'react-router-dom';
import './SubTotal.css';

function SubTotal() {
	const [{basket}] = useStateValue();
	const history = useHistory();
	return (
		<div className='subtotal'>
			<CurrencyFormat 
				renderText={(value) => (
					<React.Fragment>
						<p> SubTotal ({basket.length} items): <strong>{`${value}`}</strong></p>
						<small className='subtotal__gift'>
							<input type='checkbox'/> This order contains a gift
						 </small>
					</React.Fragment>
				)}
				decimalState={2}
				value={getBasketTotalPrice(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button onClick={e => history.push('/payment')}>Proced To CheckOut</button>
		</div>
	)
}

export default SubTotal