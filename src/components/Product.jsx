import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
const Product = ({ item }) => {
	return (
		<ProductConsumer>
			{({ addToCart, setSingleProduct }) => {
				return (
					<ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
						<div className="card">
							<div className="img-container">
								<img
									src={item.image}
									className="card-img-top p-5"
									alt="product"
									style={{ height: '320px' }}
								/>
								<div className="product-icon">
									<Link to={`/products/${item.id}`} onClick={() => setSingleProduct(item.id)}>
										<FaSearch className="icon" />
									</Link>

									<FaCartPlus className="icon" onClick={() => addToCart(item.id)} />
								</div>
							</div>
							<div className="card-body d-flex justify-content-between">
								<p className="mb-0">{item.title}</p>
								<p className="mb-0 text-main">${item.price}</p>
							</div>
						</div>
					</ProductWrapper>
				);
			}}
		</ProductConsumer>
	);
};

const ProductWrapper = styled.div`
	.card {
		box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
		transition: var(--mainTransition);
		height: 100%;
	}
	.card:hover {
		box-shadow: 7px 10px 5px 2px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
	.card-img-top {
		transition: var(--mainTransition);
	}
	.card:hover .card-img-top {
		transform: scale(1.15);
		opacity: 0.2;
	}
	.img-container {
		position: relative;
	}
	.product-icon {
		transition: var(--mainTransition);

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		opacity: 0;
	}
	.icon {
		transition: var(--mainTransition);

		font-size: 2.5rem;
		margin: 1rem;
		padding: 0.5rem;
		color: var(--primaryColor);
		background: var(--mainBlack);
		border-radius: 0.5rem;
	}
	.icon:hover {
		color: var(--mainWhite);
		transform: scale(1.2);
	}
	.card:hover .product-icon {
		opacity: 1;
	}
	.card-body {
		font-weight: bold;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
`;
export default Product;
