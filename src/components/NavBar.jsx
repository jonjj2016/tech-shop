import React from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import logo from '../images/logo.svg';
const NavBar = () => {
	return (
		<ProductConsumer>
			{({ handleSideBar, handleCart, cartItems }) => {
				return (
					<NavWrapper>
						<div className="nav-center">
							<FaBars className="nav-icon" onClick={handleSideBar} />
							<img src={logo} alt="logo of the company" />
							<div className="nav-cart">
								<FaCartPlus className="nav-icon" onClick={handleCart} />
								<div className="cart-items">{cartItems}</div>
							</div>
						</div>
					</NavWrapper>
				);
			}}
		</ProductConsumer>
	);
};
const NavWrapper = styled.nav`
	position: -webkit-sticky;
	z-index: 1;
	position: sticky;
	top: 0;
	width: 100%;
	padding: 1rem 1.5rem;
	background: var(--mainGrey);
	border-bottom: 3px solid var(--primaryColor);
	.nav-center {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1170px;
		margin: 0 auto;
	}
	.nav-icon {
		font-size: 1.5rem;
		cursor: pointer;
	}
	.nav-cart {
		position: relative;
	}
	.cart-items {
		position: absolute;
		background: var(--primaryColor);
		color: var(--mainWhite);
		font-size: 0.8rem;
		top: -0.5rem;
		right: -0.5rem;
		padding: 0 5px;
		border-radius: 50%;
	}
`;
export default NavBar;
