import Product from "./Product";

function Products({ setUserId, products }) {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {products.map((product) => (
        <Product
          setUserId={setUserId}
          key={product.id}
          img={product.image}
          title={product.title}
          rate={product.rating.rate}
          count={product.rating.count}
          productId={product.id}
        />
      ))}
    </div>
  );
}

export default Products;
