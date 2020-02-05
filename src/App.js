import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import 3rd party libraries
import { Route, Switch } from 'react-router-dom';
// Import Pages Components
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import SingleProdut from './pages/SingleProductPage';
import Contact from './pages/ContactPage';
import Cart from './pages/CartPage';
import Default from './pages/DefaultPage';
// Import Components
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';

function App () {
	return (
		<div className="App">
			{/* navbar ,sidebar footer */}
			<NavBar />
			<SideBar />
			<SideCart />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/cart" component={Cart} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route exact path="/products" component={Products} />
				<Route exact path="/products/:id" component={SingleProdut} />
				<Route component={Default} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
