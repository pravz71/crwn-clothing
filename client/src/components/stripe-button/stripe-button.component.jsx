import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';



const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	// Stripe needs the price in paise or cents
	const publishableKey = 'pk_test_HzkLwVxvTucZuBcUm0hnRUbW00HW0F0ODe';

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		}).then(response => {
			alert('Payment successful.');
		}).catch(error => {
			console.log('Payment error: ', error);
			alert('There was an issue with your payment. Please make sure you use the provided credit card');
		});
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