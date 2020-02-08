import React from 'react';
import Title from '../Title';
import { ProductConsumer } from '../../context';
import Product from '../Product';
export default function Products () {
	return (
		<ProductConsumer>
			{({ filteredProducts }) => {
				return (
					<section className="py-5">
						<div className="container">
							{/* Products */}
							<Title center title="our Products" />
							{/* products */}
							<div className="row py-5">
								{filteredProducts.map((product) => {
									return <Product key={product.id} item={product} />;
								})}
							</div>
						</div>
					</section>
				);
			}}
		</ProductConsumer>
	);
}
