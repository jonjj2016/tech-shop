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
		loading          : true,
		search           : '',
		price            : 0,
		min              : 0,
		max              : 0,
		company          : 'all',
		shipping         : false
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
		//get max price
		let max = Math.max(...storeProducts.map((item) => item.price));
		this.setState(
			{
				featuredProducts,
				storeProducts,
				filteredProducts : storeProducts,
				cart             : this.getStorageCart(),
				singleProduct    : this.geStorageProduct(),
				loading          : false,
				price            : max,
				max              : max
			},
			() => {
				this.addTotals();
			}
		);
	};
	//get storage
	geStorageProduct = () => {
		let singleProduct;
		const retrivedSingleProduct = localStorage.getItem('singleProduct');
		retrivedSingleProduct ? (singleProduct = JSON.parse(retrivedSingleProduct)) : (singleProduct = {});
		return singleProduct;
	};
	//get product from storage
	getStorageCart = () => {
		let cart;

		if (localStorage.getItem('cart')) {
			cart = JSON.parse(localStorage.getItem('cart'));
		} else {
			cart = [];
		}
		return cart;
	};
	//get totals
	getTotals = () => {
		let subTotal = 0;
		let cartItems = 0;
		this.state.cart.forEach((item) => {
			subTotal += item.total;
			cartItems += item.count;
		});
		subTotal = parseFloat(subTotal.toFixed(2));
		let tax = subTotal * 0.1;
		tax = parseInt(tax.toFixed(2));
		let total = parseFloat((subTotal + tax).toFixed(2));
		return {
			cartItems,
			subTotal,
			tax,
			total
		};
	};
	//add totals
	addTotals = () => {
		const totals = this.getTotals();
		this.setState({
			cartItems   : totals.cartItems,
			cartSuTotal : totals.subTotal,
			cartTax     : totals.tax,
			carTotal    : totals.total
		});
	};
	//sync storage
	syncStorage = () => {
		localStorage.setItem('cart', JSON.stringify(this.state.cart));
	};
	//add to cart
	addToCart = (id) => {
		let tempCart = [ ...this.state.cart ];
		let tempProducts = [ ...this.state.storeProducts ];
		let tempItem = tempCart.find((item) => item.id === id);
		if (!tempItem) {
			tempItem = tempProducts.find((item) => item.id === id);
			let total = tempItem.price;
			let cartItem = { ...tempItem, total, count: 1 };
			tempCart = [ ...tempCart, cartItem ];
		} else {
			tempItem.count++;
			tempItem.total = tempItem.price * tempItem.count;
			tempItem.total = parseFloat(tempItem.total.toFixed(2));
		}
		this.setState(
			() => {
				return { cart: tempCart };
			},
			() => {
				this.addTotals();
				this.syncStorage();
				this.openCart();
			}
		);
	};
	//set single produvt
	setSingleProduct = (id) => {
		let product = this.state.storeProducts.find((item) => item.id === id);
		localStorage.setItem('singleProduct', JSON.stringify(product));
		this.setState({ singleProduct: { ...product }, loading: false });
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

	//cart functionality
	//increment item quantity
	increment = (id) => {
		const cart = [ ...this.state.cart ];
		const itemIndex = cart.findIndex((item) => item.id === id);
		const item = cart[itemIndex];

		item.count += 1;
		item.total = item.count * item.price;
		this.setState(
			() => {
				return { cart };
			},
			() => {
				this.addTotals();
				this.syncStorage();
			}
		);
	};
	clearCart = () => {
		this.setState(
			() => {
				return { cart: [] };
			},
			() => {
				this.addTotals();
				this.syncStorage();
			}
		);
	};
	//decrement item quantity

	decrement = (id) => {
		const cart = [ ...this.state.cart ];
		const itemIndex = cart.findIndex((item) => item.id === id);
		const item = cart[itemIndex];
		if (item.count > 1) {
			item.count -= 1;
			item.total = item.count * item.price;
		} else this.removeItem();
		this.setState(
			() => {
				return { cart };
			},
			() => {
				this.addTotals();
				this.syncStorage();
			}
		);
	};
	//remove item from store list

	removeItem = (id) => {
		const cart = [ ...this.state.cart ];
		const newCart = cart.filter((item) => item.id !== id);
		this.setState(
			() => {
				return { cart: newCart };
			},
			() => {
				this.addTotals();
				this.syncStorage();
			}
		);
	};
	// handle filtering
	handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		this.setState({ [name]: value }, this.sortData);
		this.sortData();
	};
	sortData = () => {
		const { storeProducts, price, company, shipping, search } = this.state;
		let tempProducts = [ ...storeProducts ];
		if (company !== 'all') {
			tempProducts = tempProducts.filter((item) => item.company === company);
		}
		if (search) {
			tempProducts = tempProducts.filter((item) => item.company.startsWith(search.toLowerCase()));
		}
		if (shipping) {
			tempProducts = tempProducts.filter((item) => item.freeShipping);
		}
		this.setState({ filteredProducts: tempProducts });
		if (price !== 120) {
			tempProducts = tempProducts.filter((item) => item.price <= parseInt(price));
		}
		this.setState({ filteredProducts: tempProducts });
	};
	render () {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					increment        : this.increment,
					decrement        : this.decrement,
					clearCart        : this.clearCart,
					removeItem       : this.removeItem,
					handleCart       : this.handleCart,
					handleSideBar    : this.handleSideBar,
					openCart         : this.openCart,
					closeCart        : this.closeCart,
					addToCart        : this.addToCart,
					setSingleProduct : this.setSingleProduct,
					handleChange     : this.handleChange
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
