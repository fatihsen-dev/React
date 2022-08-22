import React from "react";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Product({ img, title, rate, count, setUserId, productId }) {
  return (
    <div className='border-2 border-neutral-900 rounded-sm p-2 bg-[#ffffff] flex gap-2'>
      <img src={img} className='w-36 h-full object-contain bg-white' />
      <div className='rounded-sm flex-1 w-full overflow-hidden p-2 flex flex-col justify-between'>
        <h1 className='overflow-hidden text-ellipsis font-medium text-black'>
          {title}
        </h1>
        <div className='flex flex-col font-medium text-black gap-2'>
          <p className='flex items-center gap-1'>
            <AiFillStar className='text-yellow-400' />
            <span className='flex items-center opacity-70'>
              {rate}
              <span className='ml-1 font-normal text-sm'>({count})</span>
            </span>
          </p>
          <NavLink
            className='bg-blue-500 text-white rounded-sm py-0.5 px-2 text-center'
            onClick={() => setUserId(productId - 1)}
            to={`product/${productId}`}
          >
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Product;
