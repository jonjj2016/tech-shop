import React from 'react';
import { FaTrash, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
export default function CartItem ({ cartItem, increment, decrement, removeItem }) {
	const { id, price, total, image, title, count } = cartItem;
	return (
		<div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
			{/* image */}
			<div className="col-10 mx-auto col-lg-2">
				<img src={image} alt="product" width="80px" className="image-fluid" />
			</div>
			{/* end image */}
			{/* title */}
			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">product :</span>
				{title}
			</div>
			{/* title end */}
			{/* Price */}
			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">price :</span>
				${price}
			</div>
			{/* price end */}
			{/* quantity */}
			<div className="col-10 mx-auto col-lg-2">
				<div className="d-flex justify-content-center ">
					<div>
						<FaChevronCircleDown onClick={() => decrement(id)} className=" cart-icon text-primary" />
						<span className="text-title text-muted mx-3">{count}</span>
						<FaChevronCircleUp onClick={() => increment(id)} className="cart-icon text-primary " />
					</div>
				</div>
			</div>
			{/* quantuty end */}
			{/* remove item */}
			<div className="col-10 mx-auto col-lg-2">
				<FaTrash className="text-danger cart-icon " onClick={() => removeItem(id)} />
			</div>
			{/* total */}
			<div className="col-10 mx-auto col-lg-2">
				<strong className="text-muted">item total :${total}</strong>
				{/* <span className="d-lg-none">item total :</span>
				 */}
			</div>
			{/* quantuty end */}
		</div>
	);
}
