import React from 'react';
import useMenu from '../../../Hooks/useMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitle from '../../../Components/SectionTitle';

const Offered = () => {
    const [menu] = useMenu()
     const offered = menu.filter(item => item.category === 'offered')
     console.log(offered);
    return (
        <div>
            <section></section>
            <SectionTitle
            heading="today's offer"
            subHeading="Dont Miss">

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
            {
                offered.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
            </div>
            <div className='flex justify-center mt-8 mb-14'>
            <button className='btn btn-outline border-0 border-b-4'>VEIW FULL MENU</button>
           </div>
           
           
        </div>
    );
};

export default Offered;