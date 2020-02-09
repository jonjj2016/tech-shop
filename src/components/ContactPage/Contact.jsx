import React from 'react';
import Title from '../Title';

export default function Contact () {
	return (
		<section className="py-5">
			<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3">
					<Title title="Contact us" />
					<form action="https://formspree.io/mrgqlqzp" method="POST" className="mt-5">
						{/* Name */}
						<div className="form-group">
							<input type="text" placeholder="First Name" name="firstName" className="form-control" />
						</div>
						{/* Email */}
						<div className="form-group">
							<input type="email" placeholder="Email" name="email" className="form-control" />
						</div>
						{/* Subject */}
						<div className="form-group">
							<input type="text" placeholder="Subject" name="subject" className="form-control" />
						</div>
						{/* message */}
						<div className="form-group">
							<textarea placeholder="Message" name="message" rows="10" className="form-control" />
						</div>
						<div className="form-group mt-3">
							<input type="submit" value="Submit" className="form-control bg-primary text-white" />
						</div>
					</form>
				</div>
			</div>
		</section>
		// <div style={{margin}} className="contact">
		//
		// </div>
	);
}
