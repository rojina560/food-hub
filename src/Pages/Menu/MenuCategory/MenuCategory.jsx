
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitle from '../../../Components/SectionTitle';

import Parallex from '../../Home/Parallex/Parallex';

const MenuCategory = ({items , title,bgColor}) => {
    
    return (
        <section>

            <SectionTitle
            heading="today's offer"
            subHeading="Dont Miss">

            </SectionTitle>
            <Parallex title='desserts' bgColor='bg-[#151515] bg-opacity-60 text-white'></Parallex>

           <div className='grid md:grid-cols-2 gap-4'>
           {
                items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
           
           </div>
           <div className='flex justify-center my-8'>
            <button className='btn btn-outline border-0 border-b-4 uppercase'>order your favourite food </button>
           </div>
        </section>
    );
};

export default MenuCategory;