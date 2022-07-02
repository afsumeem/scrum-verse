import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses/Courses';
import Facilities from '../Facilities/Facilities';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            {/* import all compo */}
            <Banner />
            <Courses />
            <Facilities />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;