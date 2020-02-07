import React, { memo } from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';
import defaultBcg from '../images/mainBcg2.jpg';
import { Link } from 'react-router-dom';
export default memo(function DefaultPage () {
	return (
		<div>
			<Hero max image={defaultBcg} title="404">
				<h2 className="text-uppercase">page not found</h2>
				<Link style={{ margin: '2rem' }} className="main-link" to="/">
					return home
				</Link>
			</Hero>
		</div>
	);
});
