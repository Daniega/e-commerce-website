import React from "react";

//Components
import CollectionPreview from "../collection-preview/collection-preview.component";

//Redux
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

//without styled components
// import "./collections-overview.styles.scss";

//with styled components
import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);

