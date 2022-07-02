import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import "./Course.css"
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Course = ({ course }) => {
    const star = <FontAwesomeIcon icon={faStar} />
    return (
        <Col md={3} sm={6} xs={12} style={{ marginTop: "65px", marginBottom: "65px" }}>

            {/* course card */}
            <Card className='border border-0 course'>
                <div className='course-image'>
                    <Card.Img variant="top" className='img-fluid' src={course.image} />
                </div>

                <Card.Body className="course-content">
                    <Card.Title className='course-title'>
                        Learn SCRUM: The Complete Beginner Course
                    </Card.Title>

                    <p className='course-name'>
                        {course.name}
                    </p>
                    <div className='d-flex'>
                        <p className='course-rating'>
                            {course.rating}
                        </p>
                        <p className='course-rating-star ms-3'>{star}{star}{star}{star}{star}</p>
                    </div>

                    {/* enroll now button */}
                    <Button variant="rounded-pill w-50 enroll-now fw-bold">
                        ENROLL NOW
                    </Button>
                </Card.Body>



            </Card>
        </Col>
    );
};

export default Course;