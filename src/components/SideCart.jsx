import React from 'react';
import { ProductConsumer } from '../context';
import styled from 'styled-components';
const SideCart = () => {
	return (
		<ProductConsumer>
			{({ cartOpen, closeCart, cart }) => {
				return (
					<CartWrapper show={cartOpen} onClick={closeCart}>
						<h3>Cart Items</h3>
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
