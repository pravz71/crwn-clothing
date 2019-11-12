import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	// Stripe needs the price in paise or cents
	const publishableKey = 'pk_test_HzkLwVxvTucZuBcUm0hnRUbW00HW0F0ODe';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}
	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			currency='INR'
			amount={priceForStripe}
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is Rs.${price}`}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton