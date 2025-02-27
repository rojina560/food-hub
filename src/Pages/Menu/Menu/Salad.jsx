import React from 'react';
import useMenu from '../../../Hooks/useMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Parallex from '../../Home/Parallex/Parallex';

const Salad = () => {
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad')
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-4 mt-16'>
                {salad.map(item=><MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <div className='flex justify-center mt-8 mb-14'>
            <button className='btn btn-outline border-0 border-b-4'>VEIW FULL MENU</button>
           </div>
           <Parallex title='salad' bgColor='bg-[#151515] opacity-50 text-white'></Parallex>
        </div>
       
    );
};

export default Salad;