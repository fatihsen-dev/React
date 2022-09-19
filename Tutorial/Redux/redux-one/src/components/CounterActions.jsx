import Counter from "./Counter";
import {useDispatch} from "react-redux";
import {decrement, increment, incrementByAmount} from "../stores/counter";
import {useState} from "react";

export default function CounterActions({count, setCount}) {
  const dispatch = useDispatch();

  return (
    <div className='bg-blue-500 max-w-[200px]'>
      <div className='flex gap-5 bg-inherit justify-center text-white px-3 py-2 text-2xl items-center'>
        <button
          onClick={() => dispatch(decrement())}
          className='hover:opacity-80 transition-all'>
          <i className='fa-solid fa-circle-left'></i>
        </button>
        <Counter />
        <button
          onClick={() => dispatch(increment())}
          className='hover:opacity-80 transition-all'>
          <i className='fa-solid fa-circle-right'></i>
        </button>
      </div>
      <div className='flex flex-col bg-inherit py-2 px-3 gap-1'>
        <button
          onClick={() => dispatch(incrementByAmount(4))}
          className='bg-white py-1 font-medium'>
          4 Artır
        </button>
      </div>
    </div>
  );
}
