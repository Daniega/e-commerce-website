import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux"; //compose helps us to leverage High order components in a more readable way

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../../pages/collection/collection.component";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

//exporting the regular way 
// export const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;