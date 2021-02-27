import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CourseDisplay from './CourseDisplay';


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

        try {
            // get all the courses from db.
            const courses = await context.data.getCourses();
            this.setState({ courses });
        } catch (error) {
            console.log(error);
        }
        

    }

    render() {

        return (
            <>
                { this.state.courses.map( course => (

                    <CourseDisplay title={course.title} key={course.id} id={course.id}/>

                ))}   
                
                <div className="bounds">
                    <div className="grid-33">
                        <Link to="/create" className="course--module course--add--module">
                            <h3 className="course--add--title">
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 13 13"
                                    className="add"
                                    >
                                    <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                </svg>
                                New Course
                            </h3>
                        </Link>
                    </div>
                </div>
            </>

        );

    }

}



