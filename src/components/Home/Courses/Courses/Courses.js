import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./fakedata.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            {
                courses.map(course => <Course key={course._id}
                    course={course}
                >
                </Course>)
            }
        </div>
    );
};

export default Courses;