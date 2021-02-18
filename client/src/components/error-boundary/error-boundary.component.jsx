import React from 'react';
//styles
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
	constructor() {
		super();

		this.state = { hasErrored: false };
	}
	//tell the component that an error occured
	static getDerivedStateFromError(error) {
		//process the error
		return { hasErrored: true };
	}

	//what do we wanna do with the error catched? log it or send it somewhere.
	componentDidCatch(error, info) {
		console.log(error);
	}
	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl='https://i.imgur.com/3suxlvm.png' />
					<ErrorImageText>Oh no! We tripped up! Please try again</ErrorImageText>
				</ErrorImageOverlay>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
