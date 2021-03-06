import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(){
        super();

        this.state={
            email: '',
            password:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }catch(error){
            console.log(error); 
        }
        
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]:value})
    }
    render(){
        const {email,password} = this.state;
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='Email' type='email' value={email} handleChange={this.handleChange} required />
                    <FormInput name='password' label='Password' type='password' value={password} handleChange={this.handleChange} required />

                    <div className='buttons'>
                    <CustomButton type='submit' >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;