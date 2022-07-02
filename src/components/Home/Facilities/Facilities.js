import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./Facilities.css"
import examImg from "../../../images/exam.svg";
import lesson from "../../../images/lesson.svg";
import lesson2 from "../../../images/lesson2.svg";
import liveClasses from "../../../images/liveClasses.svg"



const Facilities = () => {
    return (
        <Container>
            <Row>
                <Col md={5} className="d-flex flex-column align-self-center">
                    <h2 className='facility-title'>
                        Start learning with <br /> us right now!
                    </h2>
                    <p className='facility-content'>
                        Choose from 100+ online video <br /> courses with new updates.
                    </p>
                    <Button variant="rounded-pill w-25 enroll-now fw-bold">
                        ENROLL NOW
                    </Button>
                </Col>
                <Col md={7}>
                    <Row>
                        <Col>
                            <div className='d-flex align-items-center' style={{ marginBottom: "50px" }}>
                                <h5 className='section-title'>
                                    Live Exams
                                </h5>
                                <div className="exams">
                                    <img src={examImg} alt="" />
                                </div>
                            </div>
                            <div className='d-flex align-items-center' style={{ marginBottom: "50px" }}>
                                <h5 className='section-title'>
                                    LIVE Classes
                                </h5>
                                <div className="exams">
                                    <img src={examImg} alt="" />
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <h5 className='section-title'>
                                    100 k+ Views
                                </h5>
                                <div className="exams">
                                    <img src={examImg} alt="" />
                                </div>
                            </div>

                        </Col>
                        <Col className='d-flex flex-column align-self-center'>
                            <div className='d-flex align-items-center mb-4' >
                                <h5 className='section-title'>
                                    1000+ Lessons
                                </h5>
                                <div className="exams">
                                    <img src={examImg} alt="" />
                                </div>
                            </div>
                            <div className='d-flex align-items-center mt-4'>
                                <h5 className='section-title'>
                                    1000+ Lessons
                                </h5>
                                <div className="exams">
                                    <img src={examImg} alt="" />
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>

    );
};

export default Facilities;