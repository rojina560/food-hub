import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import {  useQuery } from '@tanstack/react-query'

import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const {user} = UseAuth()
    const axiosSecure = useAxiosSecure()
    const {data: payments = []} = useQuery({
        queryKey: ['payments',user?.email],
        queryFn: async() =>{
            const res =  await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        } 
    })
    return (
        <div>
          <h2 className="text3-xl">Total payment{payments.length}</h2>
        </div>
    );
};

export default PaymentHistory;