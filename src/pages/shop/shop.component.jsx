import React from "react";
import { Route } from "react-router-dom";

import { createStructuredSelector } from "reselect";

// import CollectionsOverview from "../../components/collections-overview/collections-overview.component"; /* We are using CollectionsOverviewContainer instead of CollectionsOverviewWithSpinner, so we can encapsulate the isLoadingProperty for the correct component
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPage from "../collection/collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); /* We are using CollectionsOverviewContainer instead of CollectionsOverviewWithSpinner, so we can encapsulate the isLoadingProperty for the correct component
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render () {

        const { match, isCollectionsLoaded } = this.props;

        return (
            <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} render={ (props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} /> } />
            </div>
        )
    }
} //we transfer match, location and history from App.js when calling to this component (using react-router-dom)

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);