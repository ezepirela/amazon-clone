import React, {useState, useEffect} from 'react';
import './Orders.css';
import Order from '../Components/Order';
import {useStateValue} from '../Context/ContextProvider';
import {db} from '../Firebase';
function Orders() {
	const [orders, setOrders] = useState([]);
	const [{basket, user}] = useStateValue();
	useEffect(() => {
		if(user){
			db
			.collection('users')
			.doc(user?.uid)
			.collection('orders')
			.orderBy('created', 'desc')
			.onSnapshot(snapshot => (
				setOrders(snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data()
					})))
				))
		}
	}, [user])
	return (
		<div className='orders'>
			<h1>Your Order</h1>
			<div className='orders__order'>
				{orders?.map(order => (
				<Order order={order}/>
				))}
			</div>
		</div>
		
	)
}

export default Orders