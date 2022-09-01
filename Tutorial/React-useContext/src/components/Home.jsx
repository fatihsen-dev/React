import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className='p-2'>
        <Header />
        <h1 className='my-4'>App</h1>
        <Footer />
      </div>
    </>
  );
}

export default Home;
