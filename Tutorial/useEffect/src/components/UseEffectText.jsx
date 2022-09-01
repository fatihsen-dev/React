import { useState, useEffect } from "react";
import User from "./User";

function UseEffectText() {
  const [btnVisibility, setBtnVisibility] = useState(false);

  return (
    <div className='w-96 flex flex-col font-medium text-white'>
      <button
        className=' bg-yellow-500 rounded-sm p-0.5'
        onClick={() => setBtnVisibility(!btnVisibility)}
      >
        {btnVisibility ? "Hide" : "Show"}
      </button>
      {btnVisibility ? <User /> : ""}
    </div>
  );
}

export default UseEffectText;
