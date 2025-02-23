import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import Parallex from '../Parallex/Parallex';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <Parallex></Parallex>
          <PopularMenu></PopularMenu>
          <Featured></Featured>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;