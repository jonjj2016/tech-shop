import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Features from '../components/HomePage/Featured';
import Sevices from '../components/HomePage/Services';
const HomePage = () => {
	return (
		<React.Fragment>
			<Hero title="awesome gadgets" max>
				<Link className="main-link" style={{ margin: '2rem' }} to="/products">
					our Products
				</Link>
			</Hero>
			<Sevices />
			<Features />
		</React.Fragment>
	);
};
export default HomePage;
