import React from "react";
import { connect } from "react-redux";


import { clearItemFromCart , addItem, removeItem} from "../../redux/cart/cart.actions";

//without styled components
// import "./checkout-item.styles.scss";

//with styled components
import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem}) => {
    const {name, imageUrl, quantity, price} = cartItem;

    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt="item" />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div onClick={ () => removeItem(cartItem) }>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={ () => addItem(cartItem) }>&#10095;</div>
        </QuantityContainer>
        <TextContainer>$ {price}</TextContainer>
        <RemoveButtonContainer onClick={ () => clearItem(cartItem) }>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))

})

export default connect(null, mapDispatchToProps)(CheckoutItem);


