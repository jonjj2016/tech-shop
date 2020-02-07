import React from 'react';
import Product from '../Product';
import Title from '../Title';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
export default function Featured () {
	return (
		<div className="py-5">
			<div className="container">
				<Title center title="Featured Products" />
				<div className="row my-5">
					<ProductConsumer>
						{({ featuredProducts }) => {
							return featuredProducts.map((item) => {
								return <Product key={item.id} item={item} />;
							});
						}}
					</ProductConsumer>
				</div>
				<div className="row mt-5">
					<div className="col text-center">
						<Link to="products" className="main-link">
							our products
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
const FeaturedWrapper = styled.section`margin: 2rem auto;`;
