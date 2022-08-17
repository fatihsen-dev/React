const root = document.getElementById("root");

//? React
// let template = React.createElement(
//   "h1",
//   {
//     id: "h1Element",
//   },
//   "Hello world"
// );

//? JSX (JavaScript XML)
// Elementler her zaman bir kapsayıcı içerisinde olmalıdır.
let post = (
  <div>
    <h1 id='header'>Hello world</h1>
    <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
    <small className='date'>19/07/2022</small>
  </div>
);
let product = (
  <div id='product-details'>
    <h2 id='product-name'>Model: Iphone 13 Pro Max</h2>
    <p id='product-disc'>Açıklama: Oldukça kunlanışlı ve güzel bir telefon.</p>
    <p id='product-price'>Fiyat: 34.499TL</p>
  </div>
);

// ReactDOM
ReactDOM.render(product, root);