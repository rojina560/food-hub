import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import Parallex from '../Parallex/Parallex';
import CallUs from '../CallUs/CallUs';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
             <Helmet>
                  <title>Food Hub | Home</title>
                </Helmet>
          <Banner></Banner>
          <Category></Category>
          <Parallex></Parallex>
          <PopularMenu></PopularMenu>
          <CallUs></CallUs>
          <Featured></Featured>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;