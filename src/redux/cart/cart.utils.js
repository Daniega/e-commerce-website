export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) { //return new version of the array becausse we must update the state for re-rendering
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}