import React, { Component } from 'react';
import styled from 'styled-components';
import { FaDolly, FaRedo, FaDollarSign } from 'react-icons/fa';
export default class Services extends Component {
	state = {
		services : [
			{
				id    : 1,
				icon  : <FaDolly className="" />,
				title : 'free shipping',
				text  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, eveniet.'
			},
			{
				id    : 2,
				icon  : <FaRedo className="" />,
				title : '30 days return policy',
				text  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, eveniet.'
			},
			{
				id    : 3,
				icon  : <FaDollarSign className="" />,
				title : 'secured payment',
				text  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, eveniet.'
			}
		]
	};
	render () {
		return (
			<ServicesWrapper py-5>
				<div className="container">
					<div className="row">
						{this.state.services.map((item) => (
							<div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
								<div className="featured-icon">{item.icon}</div>
								<div className="mt-3 text-capitalize">{item.title}</div>
								<div className="mt-3">
									<p>{item.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</ServicesWrapper>
		);
	}
}
const ServicesWrapper = styled.section`
	background: rgba(95, 183, 234, 0.2);
	.featured-icon {
		font-size: 2.5rem;
		color: var(--primaryColor);
		transition: var(--mainTransition);
	}
	.featured-icon:hover {
		cursor: pointer;
		color: var(--darkGrey);
	}
	p {
		color: var(--darkGrey);
	}
`;
