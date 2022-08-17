const root = document.getElementById("root");

let productObj = {
  name: "Iphone 13 Pro Max",
  disc: "Oldukça kunlanışlı ve güzel bir telefon.",
  price: 34.499,
  types: ["Red", "Blue", "Rose Gold", "White", "Black"],
};

//? Koşullu ifadeler
function getDescription(desc) {
  // productObj.disc var ise bu çalışır
  if (desc) {
    return <p id='product-disc'>Açıklama: {desc}</p>;
  }
  // productObj.disc yok ise bu çalışır
  else {
  }
}

let product = (
  <div id='product-details'>
    <h2 id='product-name'>
      Model: {productObj.name ? productObj.name : "İsim bulunamadı."}
    </h2>
    {getDescription(productObj.disc)}
    {productObj.price > 0 && (
      <p id='product-price'>Fiyat: {productObj.price} TL</p>
    )}
    <p className='types'>
      {productObj.types.length > 0
        ? "Seçenekler: " + productObj.types.length + " Renk bulunuyor."
        : "Seçenekler: bulunmuyor"}
    </p>
  </div>
);

// ReactDOM
ReactDOM.render(product, root);
