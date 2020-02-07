import React, { Component } from 'react';
import { linkData } from './linkData';
import { socialData } from './socialData';
import { items } from './productData';
const ProductContext = React.createContext();
class ProductProvider extends Component {
	state = {
		sideBarOpen      : false,
		cartOpen         : false,
		links            : linkData,
		cart             : [],
		socialLinks      : socialData,
		cartItems        : 0,
		cartSuTotal      : 0,
		cartTax          : 0,
		carTotal         : 0,
		storeProducts    : [],
		filteredProducts : [],
		featuredProducts : [],
		singleProduct    : {},
		loading          : false
	};
	componentDidMount () {
		this.setProducts(items);
	}
	setProducts = (products) => {
		let storeProducts = products.map((item) => {
			const { id } = item.sys;
			const image = item.fields.image.fields.file.url;
			const product = { id, ...item.fields, image };
			return product;
		});
		//featured products filtering
		const featuredProducts = storeProducts.filter((item) => item.featured);
		this.setState(
			{
				featuredProducts,
				storeProducts,
				filteredProducts : storeProducts,
				cart             : this.getStorageCart(),
				singleProduct    : this.geStorageProduct(),
				loading          : false
			},
			() => console.log(this.state)
		);
	};
	//get storage
	geStorageProduct = () => {
		return {};
	};
	//get product from storage
	getStorageCart = () => {
		return [];
	};
	//get totals
	getTotals = () => {};
	//add totals
	addTotals = () => {};
	//sync storage
	syncStorage = () => {};
	//add to cart
	addToCart = (id) => {
		console.log(`add to cart ${id}`);
	};
	//set single produvt
	setSingleProduct = (id) => {
		console.log(`set single product ${id}`);
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
					handleCart       : this.handleCart,
					handleSideBar    : this.handleSideBar,
					openCart         : this.openCart,
					closeCart        : this.closeCart,
					addToCart        : this.addToCart,
					setSingleProduct : this.setSingleProduct
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
