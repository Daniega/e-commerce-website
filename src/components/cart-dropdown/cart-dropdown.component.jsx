import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//without styled components
// import CustomButton from "../custom-button/custom-button.component";
// import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/cart-item.component";

//selectors
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

//redux actions
import { toggleCartHidden } from "../../redux/cart/cart.actions";

//with styled components
import { CartDropdownContainer , CartItemsContainer, CartDropdownButton, EmptyMessageContainer} from "./cart-dropdown.styles";

const CartDropdown = ( { cartItems, history, dispatch } ) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length 
        ?
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
          :
          <EmptyMessageContainer>Cart Empty</EmptyMessageContainer>
      }
    </CartItemsContainer>
    <CartDropdownButton onClick={() => {
      history.push("/checkout");
      dispatch(toggleCartHidden());
      }}>
      GO TO CHECKOUT
      </CartDropdownButton>
  </CartDropdownContainer>  
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));