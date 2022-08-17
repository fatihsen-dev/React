const root = document.getElementById("root");

//? JSX (JavaScript XML)

// React
let template = React.createElement(
  "h1",
  {
    id: "h1Element",
  },
  "Hello world"
);
// ReactDOM
ReactDOM.render(template, root);
