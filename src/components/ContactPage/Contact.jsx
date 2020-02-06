import React from 'react';
import Title from '../Title';
import styled from 'styled-components';
export default function Contact () {
	return (
		<section className="py-5">
			<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3">
					<form className="mt-5">
						{/* Name */}
						<div className="form-group">
							<input type="text" placeholder="First Name" name="firstName" className="form-control" />
						</div>
						{/* Email */}
						<div className="form-group">
							<input type="email" placeholder="Email" name="email" className="form-control" />
						</div>
						<div className="form-group">
							<input type="text" placeholder="Subject" name="subject" className="form-control" />
						</div>
					</form>
				</div>
			</div>
		</section>
		// <div style={{margin}} className="contact">
		// 	<Title center title="Contact us" />
		// </div>
	);
}
