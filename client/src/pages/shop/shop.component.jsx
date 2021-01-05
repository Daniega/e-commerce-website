import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// import { createStructuredSelector } from "reselect"; /* using containers */

// import CollectionsOverview from "../../components/collections-overview/collections-overview.component"; /* We are using CollectionsOverviewContainer instead of CollectionsOverviewWithSpinner, so we can encapsulate the isLoadingProperty for the correct component
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// import CollectionPage from "../collection/collection.component"; /* We are using CollectionsPageContainer instead of CollectionPageWithSpinner, so we can encapsulate the isLoadingProperty for the correct component
import CollectionPageContainer from '../collection/collection.container';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// import WithSpinner from "../../components/with-spinner/with-spinner.component";
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); /* We are using CollectionsOverviewContainer instead of CollectionsOverviewWithSpinner, so we can encapsulate the isLoadingProperty for the correct component
// const CollectionPageWithSpinner = WithSpinner(CollectionPage); /* We are using CollectionPageContainer instead of CollectionsPageWithSpinner, so we can encapsulate the isLoadingProperty for the correct component

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(
		() => {
			fetchCollectionsStart();
		},
		[ fetchCollectionsStart ]
	);

	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
		</div>
	);
}; //we transfer match, location and history from App.js when calling to this component (using react-router-dom)

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
