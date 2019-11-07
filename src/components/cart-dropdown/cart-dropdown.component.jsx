import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{
				props.cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			}
		</div>
		<CustomButton>CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
