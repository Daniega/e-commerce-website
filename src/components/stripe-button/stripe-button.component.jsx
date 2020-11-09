import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HknVVG8bOuwphSmGmXb7H27SMNEwkGUVsC3h6s2VQ6d2eSqi77jUkNe7YkI71EWNBgqvRYAH8tLpoMVcKN4N5Kf00FQNl2AZw";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

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
    )
}



export default StripeCheckoutButton;
