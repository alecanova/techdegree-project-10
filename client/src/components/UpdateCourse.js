import React, { Component } from 'react';
import Form from './Form';



export default class UpdateCourse extends Component {

    state = {
        id: '',
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        userId: '',
        errors: [],
    }

    componentDidMount() {
        this.fetchCourse();
    }

    async fetchCourse() {

        // gives access to the data in Data.js and actions in Context.js
        const { context } = this.props;
        const courseId = this.props.match.params.id;

        try {
            const course = await context.data.getCourse(courseId);
            this.setState({ 
                id: course.id,
                title: course.title,
                description: course.description,
                estimatedTime: course.estimatedTime,
                materialsNeeded: course.materialsNeeded,
                userId: course.userId
             })
        } catch(error) {
            console.log(error);
        }
    }

    render () {

        const {
            title,
            description,
            estimatedTime,
            materialsNeeded
        } = this.state;
    
        return (
            <div className="bounds course--detail">
                <h1>Update Course</h1>
                <Form 
                    change={this.change}
                    cancel={this.cancel}
                    errors={this.state.errors} //da fare
                    submit={this.submit} 
                    submitButtonText="Update Course"
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

        const {context} = this.props;
        const user = context.authenticatedUser
        const {
            id,
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId
        } = this.state;
    
        const course = {id, title, description, estimatedTime, materialsNeeded, userId};

        context.data.updateCourse(user.emailAddress, user.password, course)
            .then( errors => {
                if(errors.length > 0){
                    this.setState({ errors });
                    this.props.history.push(`/courses/${id}`);
                }
            })
            .catch( err => {
                console.log(err);

            });
    }

    cancel = () => {
        this.props.history.push(`/courses/${this.state.id}`);
    }



}