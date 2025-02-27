import React from 'react';
import useCart from '../../../Hooks/useCart';
import SectionTitle from '../../../Components/SectionTitle';

const Cart = () => {
    const [cart] = useCart()
   const totalPrice = cart.reduce( (total, item) => total + item.price,0)
    
    return (
        
        <div className='uppercase font-semibold'>
            <SectionTitle heading='wanna add more' subHeading='my cart'>
            
            </SectionTitle>
           <div className='flex justify-evenly mb-4'>
            <h2 className='text-4xl'>Items: {cart.length}</h2>
            <h2 className='text-4xl'>Total price: ${totalPrice}
                
            </h2>
            <button className='btn bg-[#D1A054] '>pay</button>
           </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-[#D1A054] text-white'>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className='uppercase text-xl'> Item Image</th>
        <th className='uppercase text-xl'> Item name</th>
        <th className='uppercase text-xl'> price</th>
        <th className='uppercase text-xl'> action</th>
        
      </tr>
    </thead>
    <tbody>
   
     {
        cart.map((item ,index)=> <tr key={item._id}>
            <th>
             {index + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image}
                      alt="" />
                  </div>
                </div>
              </div>
            </td>
            <td>
             {item.name}
            </td>
            <td>{item.price}</td>
            <th>
              <button className="btn btn-ghost btn-xs">delete</button>
            </th>
          </tr>)
     }
    
    </tbody>
 
  </table>
</div>
        </div>
    );
};

export default Cart;