import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'
import './sign-in.styles.scss';

export default class SignIn extends React.Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState(() => ({
				email:'',
				password:''
			}));
		} catch (error) {
			console.log(error);
		}
		
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState(() => ({
			[name]: value
		}));
	};

	render() {
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
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}