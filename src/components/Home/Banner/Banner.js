import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import "./Banner.css";
import image1 from "../../../images/Ellipse 1.svg";
import image2 from "../../../images/Ellipse 2.svg";
import image3 from "../../../images/Ellipse 3.svg";
import image4 from "../../../images/Ellipse 4.svg";
import Header from '../../Header/Header';


const Banner = () => {
    return (
        <Row className='m-0 p-0 banner'>
            <Header />
            <Col className='banner-content'>
                <Container>
                    <p className='bg-white rounded-pill py-1 px-2'
                        style={{ color: "#9921E8", fontSize: "14px", fontWeight: "400", display: "inline" }}
                    >
                        #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
                    </p>

                    <h2 className='text-white mt-4 banner-title'
                    >
                        Unleash Your SCRUM Skills, <br />Grab More Attention To Resume
                    </h2>

                    <Button variant="outline-light rounded-pill" style={{ marginTop: "30px", marginBottom: "45px" }}>ENROLL NOW</Button>
                    <div >
                        <p className='text-white text-center discount'>10% OFF on all courses* | Offer Valid For</p>
                        <div className='d-flex justify-content-around'>
                            <div
                                style={{ height: "px", width: "88px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "12px" }}
                            >
                                <h2 style={{ fontSize: "50px", fontWeight: "700", color: "white", textAlign: "center" }}>02</h2>
                                <p style={{ fontSize: "14px", fontWeight: "700", color: "white", textAlign: "center" }}
                                    className="pb-2"
                                >Hrs.</p>

                            </div>

                            <div
                                style={{ height: "px", width: "88px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "12px" }}
                            >
                                <h2 style={{ fontSize: "50px", fontWeight: "700", color: "white", textAlign: "center" }}>58</h2>
                                <p style={{ fontSize: "14px", fontWeight: "700", color: "white", textAlign: "center" }}
                                    className="pb-2"
                                >Mins.</p>

                            </div>

                            <div
                                style={{ height: "px", width: "88px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "12px" }}
                            >
                                <h2 style={{ fontSize: "50px", fontWeight: "700", color: "white", textAlign: "center" }}>42</h2>
                                <p style={{ fontSize: "14px", fontWeight: "700", color: "white", textAlign: "center" }}
                                    className="pb-2"
                                >Secs.</p>

                            </div>
                        </div>


                    </div>

                </Container>

            </Col>
            <Col className='banner-image'>
                <img src={image2} className="image-1" alt='' />
                <img src={image3} className="image-2" alt='' />
                <img src={image4} className="image-3" alt='' />
                <img src={image1} className="image-4" alt='' />
            </Col>
        </Row>
    );
};

export default Banner;