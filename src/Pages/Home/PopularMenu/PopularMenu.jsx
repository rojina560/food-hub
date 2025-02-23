import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category ==='popular')
            setMenu(popularItems)
        })
    },[])
    console.log(menu);
    return (
        <section>
            <SectionTitle
            heading="From Our Menu"
            subHeading="popular items">

            </SectionTitle>
           <div className='grid md:grid-cols-2 gap-4'>
           {
                menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
           
           </div>
           <div className='flex justify-center mt-6'>
            <button className='btn btn-outline border-0 border-b-4'>Veiw Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;