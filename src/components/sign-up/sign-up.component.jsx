import React from 'react';

import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signOutStart, signUpStart } from '../../redux/user/user.actions';
//without styled components
// import "./sign-up.styles.scss";

//with styled components
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const { signUpStart } = this.props;

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		signUpStart({ displayName, email, password });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<SignUpContainer>
				<SignUpTitle>I do not have an account</SignUpTitle>
				<span>Sign up with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm password"
						required
					/>

					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</SignUpContainer>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
