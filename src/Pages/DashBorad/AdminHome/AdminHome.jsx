import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaCar, FaUsers } from 'react-icons/fa';

const AdminHome = () => {
    const {user} = UseAuth()
    const axiosSecure  = useAxiosSecure();
    const {data : stats, isLoading, isError} = useQuery({
        queryKey:['admin-stats'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })
    // Handle loading state
    if (isLoading) {
        return <p className="text-center text-xl">Loading...</p>;
    }

    // Handle error state
    if (isError || !stats) {
        return <p className="text-center text-xl text-red-500">Failed to load data</p>;
    }
    return (
        <div>
            <h1 className='text-3xl'>
            <span >Hi, Welcome Back </span> 
            {
                user?.displayName ? user.displayName : 'Back'
            }
            </h1>
            <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary">
      
    </div>
    <div className="stat-title"> Revenue</div>
    <div className="stat-value">${stats.orders || 0}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaUsers className='text-3xl'></FaUsers>
    </div>
    <div className="stat-title">Customers</div>
    <div className="stat-value">${stats.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
     
    </div>
    <div className="stat-title">products</div>
    <div className="stat-value">${stats.menuItems}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
   <FaCar></FaCar>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">${stats.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
        </div>
    );
};

export default AdminHome;