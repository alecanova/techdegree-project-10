import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';




export default class UserSignIn extends Component {

    state = {
        username: '',
        password: '',
        errors: [],
    }


    render () {

        const { 
            username, 
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
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={username}
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

    cancel = () => {
        this.props.history.push("/");
    }






}