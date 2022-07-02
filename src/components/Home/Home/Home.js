import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses/Courses';
import Facilities from '../Facilities/Facilities';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Courses />
            <Facilities />
            <Testimonials />
        </div>
    );
};

export default Home;