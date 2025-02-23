import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
       <div className='featured-item bg-fixed my-20 pt-8 text-white'>
        <SectionTitle heading='from our menu' subHeading='Check it out'></SectionTitle>
        <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-20'>
            <div>
                <img src={featuredImage}alt="" />
            </div>
            <div className='md:ml-10'>
                <p>Aug 20, 2029</p>
                <p className='uppercase'> where can i get some?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eius sit numquam perferendis, eveniet quisquam ducimus hic dolorem quod placeat incidunt voluptates ipsam. Unde maxime asperiores, placeat iusto sequi at.</p>
                <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>

            </div>
        </div>
       </div>
    );
};

export default Featured;