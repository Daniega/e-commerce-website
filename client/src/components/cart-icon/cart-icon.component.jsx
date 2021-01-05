import React from "react";

import { connect } from "react-redux"
import { toggleCartHidden } from "../../redux/cart/cart.actions";

//selectors
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

//without styled components
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import "./cart-icon.styles.scss"

//with styled components
import { CartContainer, ShoppingIcon, ItemCountContainer } from "./cart-icon.styles";

const CartIcon = ( { toggleCartHidden , itemCount} ) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
)

const mapDispatchToProps = dispatch => ({
   toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);