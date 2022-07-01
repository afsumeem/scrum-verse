import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import "./Banner.css";
import image1 from "../../../images/Ellipse 1.svg";
import image2 from "../../../images/Ellipse 2.svg";
import image3 from "../../../images/Ellipse 3.svg";
import image4 from "../../../images/Ellipse 4.svg";


const Banner = () => {
    return (
        <Row className='m-0 p-0 banner'>
            <Col>
                <h5 className='text-white'>#MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY</h5>
                <h2 className='text-white'>Unleash Your SCRUM Skills,Grab More Attention To Resume</h2>
                <Button variant="outline-secondary">ENROLL NOW</Button>
                <p className='text-white'>10% OFF on all courses* | Offer Valid For</p>

            </Col>
            <Col>
                <img src={image2} alt='' />
                <img src={image3} alt='' />
                <img src={image4} alt='' />
                <img src={image1} alt='' />
            </Col>
        </Row>
    );
};

export default Banner;