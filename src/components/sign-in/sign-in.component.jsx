import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from  '../../redux/user/user.actions';

import './sign-in.styles.scss';

class SignIn extends React.Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;
		const { emailSignInStart } = this.props;

		emailSignInStart(email, password);
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState(() => ({
			[name]: value
		}));
	};

	render() {
		const { googleSignInStart } = this.props;
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput 
						name='email'
						type='email'
						handleChange={this.handleChange}
						value={this.state.email}
						label='Email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						handleChange={this.handleChange}
						value={this.state.password}
						label='Password'
						required 
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);