import React from 'react';
import Hero from '../components/Hero';
import Info from '../components/AboutPage/info';
import aboutBcg from '../images/aboutBcg.jpeg';
const AboutPage = () => {
	return (
		<div>
			<Hero image={aboutBcg} />
			<Info />
		</div>
	);
};
export default AboutPage;
