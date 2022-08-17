import React, { Component, useState, useEffect } from "react";

//- Class
// class UseEffect extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   componentDidMount() {
//     console.log("Çalıştı: componentDidMount");
//   }
//   componentDidUpdate() {
//     console.log("Çalıştı: componentDidUpdate");
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

// export default UseEffect;

//- Function

function UseEffect(props) {
  const [count, setCount] = useState(props.count);

  // componentDidMount,componentDidUpdate
  useEffect(() => {
    console.log("Çalıştı: componentDidMount,componentDidUpdate");
  });

  // componentDidMount
  useEffect(() => {
    console.log("Çalıştı: componentDidMount");

    const countData = localStorage.getItem("data");

    countData ? setCount(Number(countData)) : "";
  }, []);

  // count only
  useEffect(() => {
    console.log("Çalıştı: count");

    localStorage.setItem("count", count);
  }, [count]);
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
UseEffect.defaultProps = {
  count: 80,
};

export default UseEffect;
