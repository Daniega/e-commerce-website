import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

//selectors
import { selectCollection } from "../../redux/shop/shop.selectors";

// without styled components
// import "./collection.styles.scss";

//with styled components
import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from "./collection.styles";


const CollectionPage = ({ collection }) => {
    console.log(collection);
    
    const { title, items } = collection;

    return(
    <CollectionPageContainer>
        <CollectionTitle>{ title.toUpperCase() }</CollectionTitle>
        <CollectionItemsContainer>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </CollectionItemsContainer>
    </CollectionPageContainer>
);
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);