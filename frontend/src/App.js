import React, {useEffect} from 'react';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import Orders from './Pages/Orders';
import Header from './Components/Header';
import Login from './Pages/Login';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {useStateValue} from './Context/ContextProvider';
import Payment from './Pages/Payment';
import {auth} from './Firebase';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const promise = loadStripe("pk_test_51IQkB1Fsyfu7OQPBzMqFTLhg5WFNws1E1aM9MRxhdC2V1OpjysYbfbxi54JDKVmIYSx7GRviosUw9ckkQ7jKJOdE00YdYKTob7");
function App() {

	const [{user}, dispatch] = useStateValue();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if(authUser){
				// the user is logged in
				dispatch({
					type: 'SET_USER',
					user: authUser
				});
			}else {
				// the user is not logged
				dispatch({
					type: 'SET_USER',
					user: null
				});
			}
		});
		return () => {
			//cleanup operation
			unsubscribe();
		}

	}, [])
	// console.log(user);
  return (
  	<Router>
	  	<div className='app'>
		  	<Switch>
		  		<Route path='/checkout'>
		  			<Header />
		 			<Checkout />
		  		</Route>
		  		<Route path='/login'>
		  			<Login />
		  		</Route>
		  		<Route path='/payment'>
		  			<Header/>
		  			<Elements stripe={promise}>
		  				<Payment />
		  			</Elements>
		  		</Route>
		  		<Route path='/orders'>
		  			<Header />
		  			<Orders />
		  		</Route>
		  		<Route path='/'>
		  			<Home />
		  		</Route>
		  	</Switch>
	    </div>
  	</Router>
    
  );
}

export default App;
