import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../Firebase';

function Login() {
	const[email, setEmail] = useState('');
	const[password, setPassword] = useState('');
	const history = useHistory();
	const login = (e) => {
		e.preventDefault();
		auth
		.signInWithEmailAndPassword(email, password)
		.then((auth) => {
			//redirect to homepage and loggin
			history.push('/');
		})
		.catch(e => alert(e.message))
	};
	const register = (e) => {
		e.preventDefault();
		auth
		.createUserWithEmailAndPassword(email, password)
		.then((auth) => {
			//redirect to homepage and 
			history.push('/');
		})
		.catch(e => alert(e.message))
	};
	const emailChange = (e) =>{
		setEmail(e.target.value);
	}
	const passwordChange = (e) =>{
		setPassword(e.target.value);
	}
	return (
		<div className='login'>
			<Link to='/'>
				<img 
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png' 
				alt='' 
				className='login__logo'/>
			</Link>
			<div className='login__container'>
				<h1>Sign In</h1>
				<form>
					<h5>E-mail</h5>
					<input value={email} type='email' onChange={emailChange}/> 
					<h5>Password</h5>
					<input value={password} type='password' onChange={passwordChange}/>
					<button  onClick={login} type='submit'className='login__singInButton'>Sing In</button>
				</form>
				<p>By Signin-in you agree to Amazon's conditions of Use & Sale. Please see our Privacy Notice, our cookies Notice and our Interest-Based Ads Notice.</p>
				<button onClick={register} className='login__registerButton'>Create your Amazon Account</button>


			</div>
		</div>
	)
}

export default Login