import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

//components
import Spinner from '../../components/spinner/spinner.component';
//redux
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

//lazy components
const CollectionsOverviewContainer = lazy(() =>
	import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className='shop-page'>
			<Suspense fallback={<Spinner />}>
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
			</Suspense>
		</div>
	);
}; //we transfer match, location and history from App.js when calling to this component (using react-router-dom)

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
