import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { Link,  useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const {login} = useContext(AuthContext)
    const [disabled,setDisabled] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        login(email,password)
        .then(result =>{
          const user = result.user
          console.log(user);
          Swal.fire({
            title: "Custom animation with Animate.css",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
            
          });
          navigate(from,{replace:true})
          
          // Reset form after successful login
            form.reset();

            // Disable captcha again
          
        })
        .catch(err =>{
          console.log(err);
        })
    }
    const handleValidateCaptcha = (e) =>{
        const user_captcha_value = e.target.value;
       if(validateCaptcha(user_captcha_value)){
        setDisabled(false)
       }
    }
    return (
       <>
       <Helmet>
               <title>Food Hub | login</title>
             </Helmet>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content w-1/2 flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
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
        <div className="form-control">
          <label className="label">
              <LoadCanvasTemplate />
          </label>
          <input type="text" onBlur={handleValidateCaptcha}  name='captcha' placeholder="type the chapcha avobe" className="input input-bordered" required />
         
        </div>
        <div disabled={disabled}  className="form-control mt-6">
          <input  className="btn btn-secondary " type="submit" value="login" />
        </div>
        <p className='text-center'>Don't have an account <Link className='text-blue-700' to={'/register'}>register</Link></p>
      </form>
    </div>
  </div>
</div>
       </>
    );
};

export default Login;
