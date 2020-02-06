import React from 'react';
import Hero from '../components/Hero';
import contactBcg from '../images/contactBcg.jpeg';
import Contact from '../components/ContactPage/Contact';
const ContactPage = () => {
	return (
		<div>
			<Hero image={contactBcg} />
			<Contact />
		</div>
	);
};
export default ContactPage;
