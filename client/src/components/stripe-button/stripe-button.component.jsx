import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51HknVVG8bOuwphSmGmXb7H27SMNEwkGUVsC3h6s2VQ6d2eSqi77jUkNe7YkI71EWNBgqvRYAH8tLpoMVcKN4N5Kf00FQNl2AZw';

	const onToken = (token) => {
		axios({
			url    : 'payment',
			method : 'post',
			data   : {
				amount : priceForStripe,
				token
			}
		})
			.then((response) => {
				alert('Payment successfull!');
			})
			.catch((error) => {
				console.log('Payment error: ', JSON.parse(error));
				alert(
					'There was an issue with your payment. Please make sure you use the provided credit card details'
				);
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Daniel Gaishuber Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $ ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
