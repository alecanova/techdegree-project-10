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
}