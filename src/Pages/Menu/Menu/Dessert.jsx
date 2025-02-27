import React from 'react';
import useMenu from '../../../Hooks/useMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Parallex from '../../Home/Parallex/Parallex'

const Dessert = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    console.log(desserts);
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-4 mt-16'>
                {desserts.map(item=><MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <div className='flex justify-center mt-8 mb-14'>
            <button className='btn btn-outline border-0 border-b-4'>VEIW FULL MENU</button>
           </div>
           <Parallex title='dessert' bgColor='bg-[#151515] opacity-50 text-white'></Parallex>
        </div>
    );
};

export default Dessert;