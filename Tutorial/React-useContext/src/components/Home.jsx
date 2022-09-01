import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "../context";

function Home() {
  const { user, setUser } = useAuth();
  return (
    <>
      <div className='p-2'>
        <Header />
        {user && (
          <div className='border border-red-500 py-4 px-2'>
            <h1>Bu alan sadece giriş yapılınca görünür.</h1>
          </div>
        )}
        <h1 className='my-4'>App</h1>
        <Footer />
      </div>
    </>
  );
}

export default Home;
