import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;
//select all cart items
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);
//hide or show cart-dropdown component
export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);
//count number of items in cart
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);
//count total sum of items in cart
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,
		0
	)
);
