import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true
    };

    useEffect(() => {
        fetch('./testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [testimonials]);


    return (
        <div style={{ background: "rgba(45, 129, 247, 0.1)" }} className="p-5 my-5">

            <Container>
                <h3
                    style={{ fontSize: "16px", fontWeight: "700", lineHeight: "20px", color: "#5F72BE" }}
                    className="mt-5"
                >
                    OUR TESTIMONIALS
                </h3>

                {/* // testimonial */}
                <div className=" ps-0 w-100">
                    <Slider {...settings}>
                        {
                            testimonials.map(testimonial =>

                                <div className="w-50  d-block mx-auto"
                                    key={testimonial._id}
                                >
                                    <img
                                        className="d-block mx-auto"
                                        src={testimonial.image} alt=""

                                        style={{ height: '150px', width: '150px', borderRadius: '50%' }}
                                    />
                                    <div>

                                        <p
                                            style={{ fontSize: "18px", fontWeight: "400", color: "#0D0D0D", textAlign: "center" }}
                                        >
                                            "{testimonial.desc}"
                                        </p>
                                        <h4
                                            style={{ fontSize: "16px", fontWeight: "700", color: "#9921E8", textAlign: "center" }}
                                        >
                                            {testimonial.name}
                                        </h4>

                                        <h6
                                            style={{ fontSize: "14px", fontWeight: "400", color: "#9921E8", textAlign: "center" }}
                                        >
                                            {testimonial.designation}
                                        </h6>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                </div >
            </Container>

        </div>
    );
};

export default Testimonials;