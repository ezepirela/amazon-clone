import React from 'react';
import './Home.css';
import Product from '../Components/Product';
import Header from '../Components/Header';

function Home() {
	return (
		<React.Fragment>
			<Header /> 
			<div className="home">
				<img 
				className='home__image' 
				alt=''
				src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>	
			</div>
			<div className='home__row'>
				<Product 
				id='1234' 
				title='pushin' 
				rating={4} 
				price={123} 
				image='https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
				/>
				<Product 
				id='4321' 
				title='pushin' 
				rating={4} 
				price={123} 
				image='https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
				/>
			</div>
			<div className='home__row'>
				<Product 
				id='2234' 
				title='pushin' 
				rating={4} 
				price={123} 
				image='https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
				/>
				<Product 
				id='1334' 
				title='pushin' 
				rating={4} 
				price={123} 
				image='https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
				/>
				<Product 
				id='1244' 
				title='pushin' 
				rating={4} 
				price={123} 
				image='https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
				/>
			</div>
			<div className='home__row'>
				<Product 
				id='1235' 
				title='pushin' 
				rating={4} 
				price={123} 
				image='https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
				/>
			</div>
			
		</React.Fragment>
	)
}

export default Home