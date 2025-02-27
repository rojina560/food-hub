import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';
import Parallex from '../../Home/Parallex/Parallex';


const Soup = () => {
    const [menu] = useMenu()
     const soup= menu.filter(item => item.category === 'soup')
    return (
        <div><div className='grid md:grid-cols-2 gap-4 mt-16'>
        {soup.map(item=><MenuItem key={item._id} item={item}></MenuItem>)}
    </div>
    <div className='flex justify-center mt-8 mb-14'>
    <button className='btn btn-outline border-0 border-b-4'>VEIW FULL MENU</button>
   </div>
   <Parallex title='soup' bgColor='bg-[#151515] opacity-50 text-white'></Parallex>
        </div>
    );
};

export default Soup;