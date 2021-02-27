import React, { Component } from 'react';
import Form from './Form';



export default class CreateCourse extends Component {

    state = {
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: [],
    }



    render () {

        const {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            errors
        } = this.state;

        return (
            <div className="bounds course--detail">
                <h1>Create Course</h1>
                <Form 
                    cancel={this.cancel}
                    errors={errors} //da fare
                    change={this.change}
                    submit={this.submit} //da fare
                    submitButtonText="Create Course"
                    elements={() => (
                        <React.Fragment>
                            <div className="grid-66">
                                <div className="course--header">
                                    <h4 className="course--label">Course</h4>
                                    <input 
                                        id="title"
                                        name="title"
                                        type="text"
                                        className="input-title course--title--input"
                                        value={title}
                                        onChange={this.change}
                                        placeholder="Course title..." 
                                    />
                                    <p>By </p>
                                </div>
                                <div className="course--description">
                                    <textarea 
                                        id="description"
                                        name="description"
                                        type="text"
                                        value={description}
                                        onChange={this.change}
                                        placeholder="Course description..." 
                                    />
                                </div>
                            </div>
                            <div className="grid-25 grid-right">
                                <div className="course--stats">
                                    <ul className="course--stats--list">
                                        <li className="course--stats--list--item">
                                            <h4>Estimated Time</h4>
                                            <input 
                                                id="estimatedTime"
                                                name="estimatedTime"
                                                type="text"
                                                value={estimatedTime}
                                                className="course--time--input"
                                                value={estimatedTime}
                                                onChange={this.change}
                                                placeholder="Hours" 
                                            />
                                        </li>
                                        <li className="course--stats--list--item">
                                            <h4>Materials Needed</h4>
                                            <textarea 
                                                id="materialsNeeded"
                                                name="materialsNeeded"
                                                type="text"
                                                value={materialsNeeded}
                                                onChange={this.change}
                                                placeholder="List materials..." 
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div> 
                        </React.Fragment>
                    )}
                />
                
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
        const context = this.props;

        const {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            errors
        } = this.state;

        const course = {title, description, materialsNeeded, estimatedTime};

        context.data.createCourse(course)
            .then( data => {
                if(data.errors){
                    this.setState({errors});
                } else {
                    this.props.history.push(data.location);
                }
            })
            .catch( err => {
                console.log(err);
                //this.props.history.push("/error");

            });
    }

    cancel = () => {
        this.props.history.push("/");
    }

    


}