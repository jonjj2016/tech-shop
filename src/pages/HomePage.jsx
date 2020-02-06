import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
const HomePage = () => {
	return (
		<div>
			<Hero title="awesome gadgets" max>
				<Link className="main-link" style={{ margin: '2rem' }} to="/products">
					our Products
				</Link>
			</Hero>
		</div>
	);
};
export default HomePage;
