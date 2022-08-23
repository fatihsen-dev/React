import React from "react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function User() {
  const [userId, setUserId] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    toast.success("Component rendered");

    return () => {
      toast.error("Component deleted");
    };
  }, []);

  useEffect(() => {
    userId == 10 && setUserId(1);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    toast(`Next user: ${userId}`, {
      icon: "⏭️",
    });
  }, [userId]);
  return (
    <div className=' flex flex-col items-center'>
      <div className='w-full flex flex-col py-1 gap-1'>
        <div className='bg-blue-500 p-0.5  rounded-sm'>
          <span>Name: </span>
          <span>
            {data.name} <span>({data.username})</span>
          </span>
        </div>
        <div className='bg-blue-500 p-0.5  rounded-sm'>
          <span>Email: </span>
          <span>{data.email}</span>
        </div>
        <div className='bg-blue-500 p-0.5  rounded-sm'>
          <span>Website: </span>
          <span>{data.website}</span>
        </div>
        <div className='bg-blue-500 p-0.5  rounded-sm'>
          <span>Phone: </span>
          <span>{data.phone}</span>
        </div>
      </div>
      <button
        className='bg-green-500 w-full rounded-sm p-0.5'
        onClick={() => setUserId(userId + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default User;
