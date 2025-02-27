import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item =>item.category === 'popular') 
    
    return (
        <section>
            <SectionTitle
            heading="From Our Menu"
            subHeading="popular items">

            </SectionTitle>
           <div className='grid md:grid-cols-2 gap-4'>
           {
                popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
           
           </div>
           <div className='flex justify-center mt-8'>
            <button className='btn btn-outline border-0 border-b-4'>VEIW FULL MENU</button>
           </div>
           
        </section>
    );
};

export default PopularMenu;