import React from 'react';
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import UseAuth from '../../Hooks/UseAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleLogin} = UseAuth() 
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                name: result.user?.displayName,
                email:result.user?.email
            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')
            })
            
        })
    }
    return (
        <div className='flex justify-evenly'>
            <div className='w-16 h-16 rounded-full border flex items-center justify-center'>
           <button onClick={handleGoogleLogin}> <FaGoogle className='text-4xl '></FaGoogle></button>
            </div>
            <div className='w-16 h-16 rounded-full border flex items-center justify-center'>
            <FaLinkedin className='text-4xl '></FaLinkedin>
            </div>
            <div className='w-16 h-16 rounded-full border flex items-center justify-center'>
            <FaGithub className='text-4xl '></FaGithub>
            </div>
        </div>
    );

};

export default SocialLogin;