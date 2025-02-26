import React from 'react';
import FoodCart from '../../../Components/FoodCart/FoodCart';

const OrderTab = ({items}) => {
    return (
        <div>
             <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                  {
                    items.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                  }
                </div>
        </div>
    );
};

export default OrderTab;