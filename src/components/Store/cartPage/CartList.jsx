import React from 'react';
import CartItem from './CartItem';
import { ProductConsumer } from '../../../context';
export default function CartList () {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<ProductConsumer>
						{({ cart, increment, decrement, removeItem }) => {
							if (cart.length === 0) {
								return (
									<h1 className="text-title text-center text-muted my-4">
										your cart is currently empty
									</h1>
								);
							}
							return (
								<React.Fragment>
									{cart.map((item) => (
										<CartItem
											key={item.id}
											cartItem={item}
											increment={increment}
											decrement={decrement}
											removeItem={removeItem}
										/>
									))}
								</React.Fragment>
							);
						}}
					</ProductConsumer>
				</div>
			</div>
		</div>
	);
}
// 	<ProductConsumer>
// {({ cart }) => {
//     return (
//         <div>
//             {cart.map((item) => {
//                 return <h1>item</h1>;
//             })}
//         </div>
//     );
// }}
// </ProductConsumer>
// <CartItem />
