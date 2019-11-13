import React from 'react';

// using styled-components
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	) : (
		<WrappedComponent { ...otherProps } />
	);
};

export default WithSpinner;

// WithSpinner is a HOC i.e., it takes in an component as an input and return a component
