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
                    <p className='bg-white rounded-pill p-1'
                        style={{ color: "#9921E8", fontSize: "14px", fontWeight: "400", display: "inline" }}
                    >
                        #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
                    </p>

                    <h2 className='text-white mt-4 banner-title'
                    >
                        Unleash Your SCRUM Skills, <br />Grab More Attention To Resume
                    </h2>

                    <Button variant="outline-secondary">ENROLL NOW</Button>
                    <p className='text-white'>10% OFF on all courses* | Offer Valid For</p>
                </Container>

            </Col>
            <Col className='banner-content'>
                <img src={image2} alt='' />
                <img src={image3} alt='' />
                <img src={image4} alt='' />
                <img src={image1} alt='' />
            </Col>
        </Row>
    );
};

export default Banner;