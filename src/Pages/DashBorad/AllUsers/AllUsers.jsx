import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import {  FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    
    const { data: users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users',{
              headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
              }
            });
            
            return res.data
        }
    })
    const handleMakeAdmin = (user) =>{
      console.log('this is all user' , user);
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount > 0){
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500
          });
        }

      })
      
    }
    const handleDeleteUser = (id) =>{
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
          axiosSecure.delete(`/users/${id}`)
          .then(res=>{
            if(res.data.deletedCount > 0)
              refetch()
               Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          })
        }
      });
    }
    return (
        <div>
            <div className='flex justify-evenly'>
                <h2 className='text-3xl uppercase'>all users</h2>
                <h2 className='text-3xl uppercase'>Ttotal users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-white bg-[#D1A054] uppercase text-xl'>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {users.map((user,index) =><tr key={user._id}>
        <th>{index +1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
       <td> {user.role === 'admin'?'admin': <button onClick={()=>handleMakeAdmin(user)} className=' btn bg-[#D1A054]'><FaUsers></FaUsers></button>} </td>
      <td> <button onClick={(()=>handleDeleteUser(user._id))} className='btn bg-red-500'> <FaTrashAlt></FaTrashAlt></button></td>
      </tr> )}
      {/* row 1 */}
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;