import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FiPhoneCall, FiYoutube, FiInstagram, FiTwitter } from 'react-icons/fi';
import { BiEnvelope } from 'react-icons/bi';
import { AiOutlineFacebook } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
    return (
        <div style={{ background: "#27282B" }}>
            <div style={{ borderBottom: "1px solid #363636" }} className=" mb-4">
                <Container>
                    <Row>
                        <Col style={{
                            borderRight: "1px solid #363636"
                        }}>
                            <h5 style={{ fontSize: "24px", fontWeight: "700", color: "#FFFFFF", marginTop: "40px", marginBottom: "30px" }}>SCRUMVERSE</h5>
                            <p style={{ fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}>
                                We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
                            </p>
                            <Row className="mt-4 mb-4">
                                <Col className='d-flex align-items-center'>
                                    <div
                                        className=' d-flex align-items-center justify-content-center me-3'
                                        style={{
                                            borderRadius: "30px", background: "#343538", color: "#FFFFFF", height: "48px", width: "48px"
                                        }}
                                    >
                                        <FiPhoneCall
                                            style={{
                                                color: "#FFFFFF", height: "16px", width: "16px"
                                            }} />
                                    </div>

                                    < div>
                                        <p
                                            style={{ fontSize: "12px", fontWeight: "400", color: "#8C8C8C", margin: "0" }}
                                        >Have a question?</p>
                                        <p
                                            style={{ fontSize: "16px", fontWeight: "500", color: "#FFFFFF" }}
                                        >310-437-2766</p>
                                    </div>

                                </Col>
                                <Col className="d-flex align-items-center">
                                    <div
                                        className=' d-flex align-items-center justify-content-center me-3'
                                        style={{
                                            borderRadius: "30px", background: "#343538", color: "#FFFFFF", height: "48px", width: "48px"
                                        }}
                                    >
                                        <BiEnvelope
                                            style={{
                                                color: "#FFFFFF", height: "16px", width: "16px"
                                            }} />
                                    </div>
                                    <div>
                                        <p
                                            style={{ fontSize: "12px", fontWeight: "400", color: "#8C8C8C", margin: "0" }}
                                        >Contact us at</p>
                                        <p
                                            style={{ fontSize: "16px", fontWeight: "500", color: "#FFFFFF" }}
                                        >unreal@outlook.com</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="ps-4">
                            <h5 style={{ fontSize: "18px", fontWeight: "700", color: "#FFFFFF", marginTop: "40px", marginBottom: "30px" }}>Newsletter</h5>
                            <p style={{ fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}>
                                Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.
                            </p>

                            <InputGroup className="mb-3">
                                <InputGroup.Text
                                    style={{
                                        background: " #343538", border: "none", borderTopLeftRadius: "30px",
                                        borderBottomLeftRadius: "30px"
                                    }}
                                >
                                    <BiEnvelope
                                        style={{ color: "#8C8C8C", display: "block", margin: "auto" }}
                                    />
                                </InputGroup.Text>
                                <FormControl aria-label="Enter your Email"
                                    placeholder="Enter your email"
                                    style={{ background: " #343538", border: "none" }}
                                />
                                <InputGroup.Text
                                    style={{ background: " #343538", border: "none", borderTopRightRadius: "30px", borderBottomRightRadius: "30px" }}
                                ><Button className='rounded-pill border border-0'
                                    style={{ background: "#537CE6" }}
                                >
                                        Submit
                                    </Button></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                </Container>
            </div >

            <Container>
                <div className='d-flex justify-content-between pb-3'>
                    <a href="/#"
                        style={{ textDecoration: "none", fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}
                    >About Us</a>
                    <a href="/#"
                        style={{ textDecoration: "none", fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}
                    >Jobs</a>
                    <a href="/#"
                        style={{ textDecoration: "none", fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}
                    >Press</a>
                    <a href="/#"
                        style={{ textDecoration: "none", fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}
                    >Blogs</a>
                    <a href="/#"
                        style={{ textDecoration: "none", fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}
                    >FAQ</a>
                    <a href="/#"
                        style={{ textDecoration: "none", fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}
                    >Careers</a>
                    <a href="/#"
                        style={{ textDecoration: "none", fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}
                    >Contact</a>
                    <a href="/#"
                        style={{ textDecoration: "none", fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}
                    >Privacy Policy</a>
                    <a href="/#"
                        style={{ textDecoration: "none", fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}
                    >Sitemap</a>
                    <a href="/#"
                        style={{ textDecoration: "none", fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}
                    >Terms of use</a>
                </div>


                {/* social icons */}

                <div className="d-flex align-items-center py-4">

                    <div
                        className=' d-flex align-items-center justify-content-center me-3'
                        style={{
                            borderRadius: "30px", background: "#343538", color: "#FFFFFF", height: "48px", width: "48px"
                        }}
                    >
                        <AiOutlineFacebook
                            style={{
                                color: "#FFFFFF", height: "16px", width: "16px"
                            }} />
                    </div>
                    <div
                        className=' d-flex align-items-center justify-content-center me-3'
                        style={{
                            borderRadius: "30px", background: "#343538", color: "#FFFFFF", height: "48px", width: "48px"
                        }}
                    >
                        <FiYoutube
                            style={{
                                color: "#FFFFFF", height: "16px", width: "16px"
                            }} />
                    </div>
                    <div
                        className=' d-flex align-items-center justify-content-center me-3'
                        style={{
                            borderRadius: "30px", background: "#343538", color: "#FFFFFF", height: "48px", width: "48px"
                        }}
                    >
                        <FiInstagram
                            style={{
                                color: "#FFFFFF", height: "16px", width: "16px"
                            }} />
                    </div>
                    <div
                        className=' d-flex align-items-center justify-content-center me-3'
                        style={{
                            borderRadius: "30px", background: "#343538", color: "#FFFFFF", height: "48px", width: "48px"
                        }}
                    >
                        <FiTwitter
                            style={{
                                color: "#FFFFFF", height: "16px", width: "16px"
                            }} />
                    </div>
                    <div
                        className=' d-flex align-items-center justify-content-center me-3'
                        style={{
                            borderRadius: "30px", background: "#343538", color: "#FFFFFF", height: "48px", width: "48px"
                        }}
                    >
                        <FaWhatsapp
                            style={{
                                color: "#FFFFFF", height: "16px", width: "16px"
                            }} />
                    </div>
                    <div className='ms-auto'>
                        <p
                            style={{ fontSize: "12px", fontWeight: "400", color: "#8C8C8C", margin: "0" }}
                        >© 2021-2022, All Rights Reserved</p>

                    </div>
                </div>



            </Container>


        </div >
    );
};

export default Footer;