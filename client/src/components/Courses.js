import React, {Component} from 'react';


export default class Courses extends Component {

    state = {
        courses: [],
    }

    componentDidMount() {
        this.fetchCourses();
    }


    async fetchCourses() {

        // gives access to the data in Data.js and actions in Context.js
        const { context } = this.props;

        context.data.getCourses()
            .then( data => {
                if(data) {
                    this.setState({ courses: data});
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    render() {

            
            return (
                <div className="bounds">

                    { this.state.courses.map( course => {

                        return(                                                         
                            <div className="grid-33">
                                <h4 className="course--label">Course</h4>
                                <h3 className="course--title">{course.title}</h3>
                            </div>
                        );

                    })}
                    
                </div>

            );

    }

}



