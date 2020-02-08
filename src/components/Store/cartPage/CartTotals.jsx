import React from 'react';
import { ProductConsumer } from '../../../context';
export default function CartTotals () {
	return (
		<div className="container">
			<div className="row">
				<ProductConsumer>
					{({ clearCart, carTotal, cartSuTotal, cartTax }) => {
						return (
							<div className="col text-center text-title my-4">
								<button className="btn btn-outline-danger text-capitalize mb-4" onClick={clearCart}>
									clear-cart
								</button>
								<h3>subtotal : ${cartSuTotal}</h3>
								<h3>tax : ${cartTax}</h3>
								<h3>cartTotal : ${carTotal}</h3>
							</div>
						);
					}}
				</ProductConsumer>
			</div>
		</div>
	);
}
