import React, {Component} from 'react';



export default class CourseDetail extends Component {

    state = {
        course: {},
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
            this.setState({ course })
        } catch(error) {
            console.log(error);
        }
    }

    // DELETE request to the REST API's /api/courses/:id
    deleteCourse = (id) => {

        // gives access to the data in Data.js and actions in Context.js
        const { context } = this.props;
        const user = context.authenticatedUser;
        const inputConfirmed = window.confirm('Are you sure you want to delete this course?');
        
        if(inputConfirmed) {
            context.data.deleteCourse(user.emailAddress, user.password, id)
                .then(data => {
                    if(data) { 
                        // if deleted return at the home page
                        this.props.history.push('/');
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }

    };

    render () {

        const { course } = this.state;

        let editButtons;

        if(course.userId === this.props.context.authenticatedUser?.id) {

            editButtons = (
                <div className="actions--bar">
                <div className="bounds">
                    <div className="grid-100">
                        <button className="button" onClick={() => this.props.history.push(`/courses/${course.id}/update`)}>
                            Update Course
                        </button>
                        <button className="button" onClick={() => this.deleteCourse(course.id)}>
                            Delete Course
                        </button>
                        <button className="button button-secondary" onClick={() => this.props.history.push('/')}>
                            Return to List
                        </button>
                    </div>
                </div>
            </div>
            );

        } else {
            editButtons = (
                <div className="actions--bar">
                    <div className="bounds">
                        <div className="grid-100">
                            <button className="button button-secondary" onClick={() => this.props.history.push('/')}>
                                Return to List
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

       

        return (

            <>
                {editButtons}

                <div className="bounds course--detail">
                    <div className="grid-66">
                        <div className="course--header">
                            <h4 className="course--label">Course</h4>
                            <h3 className="course--title">{course.title}</h3>
                            <p>By </p>
                        </div>
                        <div className="course--description">{course.description}</div>
                    </div>
                    <div className="grid-25 grid-right">
                        <div className="course--stats">
                            <ul className="course--stats--list">
                                <li className="course--stats--list--item">
                                    <h4>Estimated Time</h4>
                                    <h3>{course.estimatedTime}</h3>
                                </li>
                                <li className="course--stats--list--item">
                                    <h4>Materials Needed</h4>
                                    <ul>
                                        <li>{course.materialsNeeded}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>

        );



    }

    

}
