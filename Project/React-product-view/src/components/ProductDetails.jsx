import React from "react";

function ProductDetails({ products, userId }) {
  const detail = products[userId];
  return (
    <div className='w-full flex gap-6 rounded-sm border-neutral-800 p-6 border h-[340px]'>
      <img src={detail.image} className='w-72 object-contain' />
      <div className='flex flex-col w-full gap-2'>
        <p className='text-xl font-medium py-1 px-2 bg-gray-200'>
          {detail.title}
        </p>
        <div className='w-full flex-1 bg-gray-200 flex gap-2 p-2'>
          <div className='w-72 bg-gray-100 border text-white font-medium gap-2 border-gray-300 p-2 flex flex-col'>
            <span className='bg-blue-500 py-0.5 px-2 flex gap-1 rounded-sm'>
              Price:
              <span className='bg-green-400 px-1 rounded flex items-center gap-1'>
                ${detail.price}
              </span>
            </span>
            <div className='flex gap-1 bg-blue-500 py-0.5 px-2 items-center rounded-sm'>
              <span>Rate:</span>
              <div className='bg-yellow-400 px-1 rounded flex items-center gap-1'>
                <span>{detail.rating.rate}</span>
                <small className='font-normal'>({detail.rating.count})</small>
              </div>
            </div>
            <span className='bg-blue-500 py-0.5 px-2 flex items-center gap-1 rounded-sm'>
              Category:{" "}
              <span className='bg-red-500 px-1 rounded font-normal'>
                {detail.category}
              </span>
            </span>
          </div>
          <textarea
            className='bg-gray-100 h-full flex-1 resize-none p-2 text-gray-700/60 border border-gray-300'
            disabled
            value={detail.description}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
