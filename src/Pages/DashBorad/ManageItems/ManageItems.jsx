import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ManageItems = () => {
    const [menu] = useMenu()
    return (
        <div>
            <SectionTitle subHeading={'hurry up'} heading={'manage all items'}></SectionTitle>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-[#D1A054] uppercase text-white py-4'>
      <tr>
       <th></th>
        <th>item image</th>
        <th>item name</th>
        <th>price</th>
        <th>details</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {menu.map((item,index) => <tr key={item._id}>
        <th>{index + 1}</th>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={item.image} alt="" />
              </div>
            </div>
           
          </div>
        </td>
        <td>
         {item.name}
        </td>
        <td>$ {item.price}</td>
        <td>
          <button className="btn btn-md bg-[#D1A054]"><FaEdit className='text-white'></FaEdit></button>
        </td>
        <td>
          <button className="btn btn-md bg-red-700"><FaTrash className='text-white'></FaTrash></button>
        </td>
      </tr>
     )}
    
     
     
    </tbody>
  
 
  </table>
</div>
        </div>
    );
};

export default ManageItems;