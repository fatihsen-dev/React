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
//? JSX Expressions

// değişkenden veri alma = {name}
let productName = "Iphone 13 Pro Max";
let productDisc = "Oldukça kunlanışlı ve güzel bir telefon.";
let productPrice = 34.499;

// objeden veri alma {obj.name}
let productObj = {
  name: "Iphone 13 Pro Max",
  disc: "Oldukça kunlanışlı ve güzel bir telefon.",
  price: 34.499,
};

function priceFunc(price) {
  return price + " TL";
}

let product2 = (
  <div id='product-details'>
    <h2 id='product-name'>Model: {productObj.name}</h2>
    <p id='product-disc'>Açıklama: {productObj.disc}</p>
    <p id='product-price'>Fiyat: {priceFunc(productObj.price)}</p>
  </div>
);

// ReactDOM
ReactDOM.render(product2, root);
