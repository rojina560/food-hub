import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, loading,refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
    const handleDeleteItem = (item) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) => {
            if (result.isConfirmed) {
              const res = await axiosSecure.delete(`/menu/${item._id}`)
              console.log(res.data);
              if(res.data.deletedCount > 0){
                  refetch()
                // refetch to updated url
                   Swal.fire({
                    position: "top-end",
                     icon: "success",
                title: `${item.name} has been deleted.`,
                showConfirmButton: false,
                timer: 1500
               
              });
              }
           
            }
          });
    }
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
         <Link to={`/dashboard/updateItem/${item._id}`}> <button className="btn btn-md bg-[#D1A054]"><FaEdit className='text-white'></FaEdit></button></Link>
        </td>
        <td>
          <button onClick={()=>handleDeleteItem(item)} className="btn btn-md bg-red-700"><FaTrash className='text-white'></FaTrash></button>
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