import React, { use, useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Register = () => {
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
    const {createUser,updateUserProfile,setUser , user} = useContext(AuthContext)
   
    const handleRegister = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const photo= form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password,name,photo);
       
        createUser(email,password)
        .then(result =>{
          console.log(result.user);
         
           updateUserProfile(name,photo)
          setUser({...user,photoURL:photo,displayName:name})
         
            // create use entry in the database
            const userInfo = {
              name,
              email
            }
              
            axiosPublic.post('/users',userInfo)
            .then(res =>{
              if(res.data.insertedId){
                console.log('user created in the database');
                form.reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/')
              
              }
              
            })
           
          })
         
        .catch(error =>{
          console.log(error);
        })
        
    }
    return (
       <>
          <Helmet>
               <title>Food Hub | register</title>
             </Helmet>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="photo" name='photo' placeholder="photoUrl" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <input className='btn bg-[#D1A054]' type="submit" value="Register" />
               
              </div>
              <p className='text-center text-[#D1A054]'>Already registered? Go to<Link className='text-violet-800 underline' to={'/login'}> login</Link></p>
              <p className='text-center'>or sign up with </p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
       </>
    );
};

export default Register;