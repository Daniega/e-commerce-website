//using Container Pattern to get the property of isLoading from redux to the actual component that needs it (CollectionsOverviewWithSpinner) ,instead of the whole ShopPage getting it (encapsulation)

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux"; //compose helps us to leverage High order components in a more readable way

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

//exporting the regular way 
// export const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
