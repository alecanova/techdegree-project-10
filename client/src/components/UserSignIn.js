import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';




export default class UserSignIn extends Component {

    state = {
        email: '',
        password: '',
        errors: [],
    }


    render () {

        const { 
            email, 
            password, 
            errors 
        } = this.state;

        return (
            <div className="bounds">
                <div className="grid-33 centered signin">
                    <h1>Sign In</h1>
                    <Form 
                        cancel={this.cancel}
                        errors={errors} //da fare
                        submit={this.submit} //da fare
                        submitButtonText="Sign In"
                        elements={() => ( // value is a function which returns the input fields to be used in each of the forms
                            <React.Fragment>
                                <input 
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={email}
                                    onChange={this.change}
                                    placeholder="Email Address" />
                                <input 
                                    id="password"
                                    name="password"
                                    type="text"
                                    value={password}
                                    onChange={this.change}
                                    placeholder="Password" />    
                            </React.Fragment>
                        )}
                    />
                    <p>
                        Don't have a user account? <Link to="/signup">Click here</Link> to sign up!
                    </p>
                </div>
            </div>
        );

    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            };
        });
    }

    submit = () => {
        // access to Data methods
        const { context } = this.props;
        // sets the path where the user was going after being authenticated
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        // user credentials
        const { email, password } = this.state;
        context.actions.signIn(email, password)
            .then( user => {
                if (user === null) {
                    return { errors: [ 'Sign-in was unsuccessful' ] };
                } else {
                    this.props.history.push(from);
                    console.log(`SUCCESS! ${email} is now signed in!`);
                }
            })
            .catch( err => {
                console.log(err);
            })
    }

    cancel = () => {
        this.props.history.push("/");
    }






}