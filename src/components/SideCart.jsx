import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const SideCart = () => {
	return (
		<ProductConsumer>
			{({ cartOpen, closeCart, cart, carTotal }) => {
				return (
					<CartWrapper show={cartOpen} onClick={closeCart}>
						<h4 className="text-capitalize text-main">cart total : ${carTotal}</h4>

						<ul>
							{cart.map((item) => {
								return (
									<li key={item.id} className="cart-item mb-4">
										<img width="75px" src={`../${item.image}`} alt="cart" />
										<div className="mt-3">
											<h6 className="text-uppercase">{item.title}</h6>
											<h6 className="text-title text-capitalize">amount : {item.count}</h6>
										</div>
									</li>
								);
							})}
						</ul>
						<div className="text-center my-5">
							<Link to="/cart" className="main-link">
								cart page
							</Link>
						</div>
					</CartWrapper>
				);
			}}
		</ProductConsumer>
	);
};
const CartWrapper = styled.div`
	position: fixed;
	top: 60px;
	right: 0;
	width: 100%;
	height: 100%;
	overflow: scroll;
	ul {
		padding: 0;
	}
	.text-main {
		text-align: center;
		/* text-shadow: 4px 4px 2px rgba(150, 150, 150, 1); */
	}
	.cart-item {
		list-style: none;
		display: flex;
		justify-content: space-around;
		border-bottom: 2px solid #999;
	}
	background: var(--mainGrey);
	z-index: 1;
	border-left: 4px solid var(--primaryColor);
	transition: var(--mainTransition);
	transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
	@media (min-width: 576px) {
		width: 23rem;
	}
`;
export default SideCart;
