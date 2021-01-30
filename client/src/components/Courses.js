import React, {Component} from 'react';
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
            <div>

                { this.state.courses.map( course => (

                    <CourseDisplay title={course.title} key={course.id} id={course.id}/>

                ))}
                
            </div>

        );

    }

}



