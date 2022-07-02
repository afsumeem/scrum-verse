import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
    return (
        <div style={{ background: "#27282B" }}>
            <div style={{ borderBottom: "1px solid #363636" }}>
                <Container>
                    <Row>
                        <Col style={{
                            borderRight: "1px solid #363636"
                        }}>
                            <h5 style={{ fontSize: "24px", fontWeight: "700", color: "#FFFFFF" }}>SCRUMVERSE</h5>
                            <p style={{ fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}>
                                We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
                            </p>
                            <Row>
                                <Col>

                                    <FiPhoneCall />
                                    <div>
                                        <p>Have a question?</p>
                                        <p>310-437-2766</p>
                                    </div>

                                </Col>
                                <Col>

                                    <FiPhoneCall />
                                    <div>
                                        <p>Contact us at</p>
                                        <p>unreal@outlook.com</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <h5 style={{ fontSize: "18px", fontWeight: "700", color: "#FFFFFF" }}>Newsletter</h5>
                            <p style={{ fontSize: "14px", fontWeight: "400", color: "#8C8C8C" }}>
                                Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.
                            </p>
                        </Col>
                    </Row>

                </Container>
            </div>


        </div >
    );
};

export default Footer;