import React from 'react';
import Hero from '../components/Hero';
import singleProductBcg from '../images/singleProductBcg.jpeg';
// import SingleProd from '../components/singleProduct/SingleProd';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
const SingleProduct = () => {
	return (
		<React.Fragment>
			<Hero image={singleProductBcg} />

			<ProductConsumer>
				{({ singleProduct, addToCart, loading }) => {
					if (loading) {
						console.log('hello from loading');
						return <h1>product is loading...</h1>;
					}
					const { company, id, description, price, title, image } = singleProduct;
					return (
						<section className="py-5">
							<div className="container">
								<div className="row">
									<div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
										{/* it counts from index.js */}
										<img src={`../${image}`} alt="product image" className="image-fluid" />
									</div>
									<div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
										<h5 className="text-title mb-4">model : {title}</h5>
										<h5 className="text-capitalize text-muted mb-4">company : {company}</h5>
										<h5 className="text-capitalize text-main mb-4">price : ${price}</h5>
										<p className="text-capitalize text-title mt-3">some info about product :</p>
										<p>{description}</p>
										<button
											type="button"
											className="main-link"
											style={{ margin: '0.75rem' }}
											onClick={() => addToCart(id)}
										>
											Add to cart
										</button>
										<Link to="/products" className="main-link" style={{ margin: '0.75rem' }}>
											back to products
										</Link>
									</div>
								</div>
							</div>
						</section>
					);
				}}
			</ProductConsumer>
		</React.Fragment>
	);
};
export default SingleProduct;
