import React, { Component } from 'react';
import { linkData } from './linkData';
import { socialData } from './socialData';

const ProductContext = React.createContext();
class ProductProvider extends Component {
	state = {
		sideBarOpen : false,
		cartOpen    : false,
		cartItems   : 40,
		links       : linkData,
		cart        : [],
		socialLinks : socialData
	};
	//handle sidebar
	handleSideBar = () => {
		this.setState({ sideBarOpen: !this.state.sideBarOpen });
	};
	//handle cart
	handleCart = () => {
		this.setState({ cartOpen: !this.state.cartOpen });
	};
	//open cart
	openCart = () => {
		this.setState({ cartOpen: true });
	};
	//close cart
	closeCart = () => {
		this.setState({ cartOpen: false });
	};
	render () {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleCart    : this.handleCart,
					handleSideBar : this.handleSideBar,
					openCart      : this.openCart,
					closeCart     : this.closeCart
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
