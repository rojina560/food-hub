import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
    const navLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/order'}>Order Now</Link></li>  
        <li><Link to={'/secret'}>secret</Link></li>  
    </>
    const handleLogout = ()=>{
      logOut()
      .then()
      .catch(err =>{
        console.log(err);
      })
    }
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-20 bg-black text-white max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#D99904] rounded-md z-[1] mt-2 w-24 p-2 shadow">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Food Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <div className='flex gap-4'> {navLinks}</div>
    </ul>
  </div>
  <div className="navbar-end">
  { user ? <> <img className='w-[40px] ' src={user.photoURL} alt="" /><button className='ml-4 ' onClick={handleLogout}>logOut</button></>:<Link to={'/login'}><button>login</button></Link>}  
   
  </div>
</div>
        </div>
    );
};

export default Navbar;