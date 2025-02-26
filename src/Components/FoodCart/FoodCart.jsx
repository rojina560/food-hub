import React from 'react';

const FoodCart = ({item}) => {
    const {image,name,recipe,price} = item ;
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
      <button className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCart;