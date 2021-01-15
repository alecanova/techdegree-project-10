import React from 'react';




const Courses = ({ courses }) => {
    return(
        <div>
            <h1 className="header--logo">Courses</h1>
            {courses.map((course) => (
                <div class="grid-33">
                    <h4 className="course--label">{course.title}</h4>
                    <h3 className="course--title">{course.description}</h3>
                </div>
            ))}
        </div>
    )
}

export default Courses


