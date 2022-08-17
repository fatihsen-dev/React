const root = document.getElementById("root");

//? JSX (JavaScript XML)
let template = <h1 id='test'>Hello world</h1>;

// React
// let template = React.createElement(
//   "h1",
//   {
//     id: "h1Element",
//   },
//   "Hello world"
// );

// ReactDOM
ReactDOM.render(template, root);
