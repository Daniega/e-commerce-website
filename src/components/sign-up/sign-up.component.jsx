import React, { useState } from 'react';

import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';
//without styled components
// import "./sign-up.styles.scss";

//with styled components
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
	// constructor() {
	// 	super();

	// 	this.state = {
	// 		displayName: '',
	// 		email: '',
	// 		password: '',
	// 		confirmPassword: ''
	// 	};
	// }
	const [
		userCredentials,
		setUserCredentials
	] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });

	const handleChange = (event) => {
		const { value, name } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		signUpStart({ displayName, email, password });
	};

	return (
		<SignUpContainer>
			<SignUpTitle>I do not have an account</SignUpTitle>
			<span>Sign up with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display name"
					required
				/>
				<FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm password"
					required
				/>

				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</SignUpContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
