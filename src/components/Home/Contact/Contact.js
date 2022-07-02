import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='mx-4 p-4 d-flex justify-content-between align-items-center' style={{ background: "#5F72BE", borderRadius: "12px" }}>
            <div>
                <h4 className='text-white' style={{ fontSize: "18px", fontWeight: "700" }}>
                    Email Us
                </h4>
                <p className='text-white' style={{ fontSize: "16px", fontWeight: "400" }}>
                    Connect with us in case of any queries, complaints or feedbacks...
                </p>
            </div>

            <div>
                <Button className='px-5 border border-0' style={{ fontSize: "16px", fontWeight: "700", background: "#2D81F7" }}>
                    CONTACT US
                </Button>
            </div>

        </div>
    );
};

export default Contact;