import React from "react";

//redux
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";


//without styled components
// import "./collection-item.styles.scss";
// import CustomButton from "../custom-button/custom-button.component";

//with styled components
import { CollectionItemContainer, AddButton, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer } from "./collection-item.styles";

const CollectionItem = ({ item, addItem, onAddItem}) => {
    const { name, price, imageUrl } = item;

    onAddItem = () => {
        alert("Added to cart");
        addItem(item);
    }
    
    return(
    <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
            <NameContainer>{ name }</NameContainer>
            <PriceContainer>$ { price }</PriceContainer>
        </CollectionFooterContainer> 
        <AddButton onClick={() => onAddItem()} inverted >ADD TO CART</AddButton>   
    </CollectionItemContainer>
)}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);