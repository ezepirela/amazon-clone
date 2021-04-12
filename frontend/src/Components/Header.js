import React from 'react';
import {Link} from 'react-router-dom'
// import {} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from '../Context/ContextProvider';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'; 
import {auth} from '../Firebase';
import './Header.css';

const Header = () => { 
	const [{user, basket}] = useStateValue();
	const handleAuthentication = () => {
		if(user) {
			auth.signOut();
		}
	}
	return (
		<nav className='header'>
			<Link to='/'> 
				<img alt=''className='header__logo'src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
			</Link>
			<div className='header__search'>
				<input type='search' className='header__searchInput' />	
				<SearchIcon className='header__searchIcon'/>	
			</div>
			<div className='header__nav'>
				<Link to={user? '/': '/login'} className='header__link'>
				<div onClick={handleAuthentication} className='header__options'>
						<span className='header__optionsLineOne'>{user? `hello ${user.email}`: `register` }</span>
						<span className='header__optionsLineTwo'>{user? 'Sign Out' : 'Sign In'}</span>
					</div>
				</Link>
				<Link to='/orders' className='header__link'>
					<div className='header__options'>
						<span className='header__optionsLineOne'>Returns</span>
						<span className='header__optionsLineTwo'>&Orders</span>
					</div>
				</Link>
				<Link className='header__link'> 
					<div className='header__options'>
						<span className='header__optionsLineOne'>Your</span>
						<span className='header__optionsLineTwo'>Prime</span>
					</div>
				</Link> 

				<Link to='/checkout' className='header__link'>
					<div className='header__optionsBasket '>
						<span><ShoppingBasketIcon /> </span>
						<span className='header__optionsLineTwo header__optionsCount'>{basket?.length}</span>
					</div>
				</Link>
			</div>
		</nav>
	)
}
 
export default Header
