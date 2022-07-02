import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {

    // fetch data from fakedata
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./fakedata.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className='px-5'>

            <p style={{ marginTop: "95px", fontSize: "18px", fontWeight: "700" }}>A broad range of courses</p>
            <p style={{ fontSize: "18px", fontWeight: "400" }}>Choose from 100+ online video courses with new additions published every month</p>
            <Row>

                {/* map all courses */}
                {
                    courses.map(course => <Course key={course._id}
                        course={course}
                    >
                    </Course>)
                }
            </Row>
        </div>

    );
};

export default Courses;