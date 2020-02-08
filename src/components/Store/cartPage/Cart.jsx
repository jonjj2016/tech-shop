import React from 'react';
import Title from '../../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import styled from 'styled-components';
import { ProductConsumer } from '../../../context/context';
export default function Store () {
	return (
		<section className="py-5">
			<div className="container">
				<Title center title="your cart items" />
			</div>
			<CartColumns />
			<CartList />
			<CartTotals />
		</section>
	);
}
