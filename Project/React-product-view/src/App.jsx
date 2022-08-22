import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import { Routes, Route, NavLink } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import { AiFillHome } from "react-icons/ai";

function App() {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className='flex flex-col items-center py-4'>
      <div className='container'>
        <h1 className='text-6xl font-semibold mb-6 bg-blue-500 rounded-sm text-white justify-between p-4  flex w-full'>
          <p className='select-none'>React shop</p>
          <NavLink to={`/`}>
            <AiFillHome />
          </NavLink>
        </h1>

        <Routes>
          <Route
            exact
            path='/'
            element={<Products products={products} setUserId={setUserId} />}
          ></Route>
          <Route
            path='/product/:id'
            element={<ProductDetails products={products} userId={userId} />}
          ></Route>
          <Route
            path='*'
            element={<h1 className='text-4xl bg-red-600'>404</h1>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
