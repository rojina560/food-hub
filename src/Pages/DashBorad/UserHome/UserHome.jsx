import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';

const UserHome = () => {
    const {user} = UseAuth()
    return (
        <div>
             <h1 className='text-3xl'>
            <span >Hi, Welcome Back </span> 
            {
                user?.displayName ? user.displayName : 'Back'
            }
            </h1>
        </div>
    );
};

export default UserHome;