import React from 'react';
import Products from '../components/ProductsPage/Products';
import Hero from '../components/Hero';
import ProductsBcg from '../images/productsBcg.jpeg';
const ProductsPage = () => {
	return (
		<div>
			<Hero image={ProductsBcg} />
			<Products />
		</div>
	);
};
export default ProductsPage;
