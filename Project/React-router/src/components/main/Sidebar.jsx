import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        backgroundColor: "royalblue",
        height: "100%",
        width: "220px",
        display: "flex",
        flexDirection: "column",
        fontSize: "20px",
        padding: "20px",
        gap: "10px",
      }}
    >
      <NavLink className='home' to=''>
        Anasayfa
      </NavLink>
      <NavLink className='home' to='akis'>
        Akış
      </NavLink>
      <NavLink className='home' to='kesfet'>
        Keşfet
      </NavLink>
      <NavLink className='home' to='makaleler'>
        Makaleler
      </NavLink>
      <NavLink className='home' to='soru-cevap'>
        Soru & Cevap
      </NavLink>
      <NavLink className='home' to='ders-istekleri'>
        Ders İstekleri
      </NavLink>
    </div>
  );
}

export default Sidebar;
