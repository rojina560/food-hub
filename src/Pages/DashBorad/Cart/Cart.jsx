import React from 'react';
import useCart from '../../../Hooks/useCart';
import SectionTitle from '../../../Components/SectionTitle';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart,refetch] = useCart()
   const totalPrice = cart.reduce( (total, item) => total + item.price,0)
   const axiosSecure = useAxiosSecure()
   const handleDeleteCart = id =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        axiosSecure.delete(`/carts/${id}`)
        .then(res =>{
          if(res.data.deletedCount > 0){
            refetch()
            Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
          }
        })
      }
    });

   }
    
    return (
        
        <div className='uppercase font-semibold'>
            <SectionTitle heading='wanna add more' subHeading='my cart'>
            
            </SectionTitle>
           <div className='flex justify-evenly mb-4'>
            <h2 className='text-4xl'>Items: {cart.length}</h2>
            <h2 className='text-4xl'>Total price: ${totalPrice}
                
            </h2>
            {cart.length ?  <Link to={'/dashboard/payment'}> <button className='btn bg-[#D1A054] '>pay</button></Link>:  <button disabled className='btn bg-[#D1A054] '>pay</button>}
          
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
              <button onClick={() =>handleDeleteCart(item._id)} className="btn btn-ghost btn-xs">delete</button>
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