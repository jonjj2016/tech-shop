import React from 'react';
import Hero from '../components/Hero';
import storeBcg from '../images/storeBcg.jpeg';
import Store from '../components/Store/cartPage';
const CartPage = () => {
	return (
		<div>
			<Hero image={storeBcg} />
			<Store />
		</div>
	);
};
export default CartPage;
