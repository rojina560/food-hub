import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const FoodCart = ({item}) => {
    const {image,name,recipe,price,_id} = item ;
    const {user} = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    

    const handleFoodCart = food =>{
      if(user && user.email){
        // send cart item to the database 
      
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res =>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} add to the cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch cart
          refetch()

          }
          
        })
      }
      else{
        Swal.fire({
          title: " you are not logged In",
          text: "please login to add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login"
        }).then((result) => {
          if (result.isConfirmed) {
            // send user to the login page
            navigate('/login',{state:{from:location}})
          }
        });
      }
    }
    return (
        <div className="card bg-base-100  shadow-xl">
  <figure className="">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl"/>
    
  </figure>
  <p className='bg-slate-900 text-white absolute  right-0 sm:right-2 md:right-2 lg:right-2 mr-4 mt-4 py-2 px-4 rounded-sm'>${price}</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={()=> handleFoodCart(item)} className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCart;