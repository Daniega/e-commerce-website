import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux"; //compose helps us to leverage High order components in a more readable way

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionPage from "../../pages/collection/collection.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsLoaded
});

//exporting the regular way 
// export const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;