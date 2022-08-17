import React, { Component, useState } from "react";

//- Class
// class StateHook extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// export default StateHook;

//- Function

function StateHook(props) {
  const [count, setCount] = useState(props.count);
  return (
    <div className='w-full h-full flex justify-center items-start p-6'>
      <div className='inline-flex bg-red-500 text-2xl p-2 rounded-sm flex-col items-center gap-2'>
        <p className='border border-black px-2 rounded-sm'>{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className='bg-green-500 rounded-sm px-2 hover:bg-opacity-80 transition-colors'
        >
          +1
        </button>
      </div>
    </div>
  );
}
// default props value
StateHook.defaultProps = {
  count: 80,
};

export default StateHook;
