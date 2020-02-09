import React from 'react';
import Title from '../Title';
import { ProductConsumer } from '../../context';
import Product from '../Product';
import FilterProducts from './FilterProducts';
export default function Products () {
	return (
		<ProductConsumer>
			{({ filteredProducts }) => {
				return (
					<section className="py-5">
						<div className="container">
							{/* Products */}
							<Title center title="our Products" />
							{/* products filter */}
							<FilterProducts />
							{/* total count */}
							<div className="row">
								<div className="col-10 mx-auto">
									<h6 className="text-title">total products : {filteredProducts.length}</h6>
								</div>
							</div>
							{/* products */}
							<div className="row py-5">
								{filteredProducts.length === 0 ? (
									<div className="col text-title text-center">no items matched your search</div>
								) : (
									filteredProducts.map((product) => {
										return <Product key={product.id} item={product} />;
									})
								)}
							</div>
						</div>
					</section>
				);
			}}
		</ProductConsumer>
	);
}
