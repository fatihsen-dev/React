import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./components/expenses";
import Invoices from "./components/invoices";
import Invoice from "./components/invoice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='expenses' element={<Expenses />} />

      <Route path='invoices' element={<Invoices />}>
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p>Select an invoice</p>
            </main>
          }
        />
        <Route path=':invoiceId' element={<Invoice />} />
      </Route>

      <Route
        path='*'
        element={
          <main style={{ padding: "1rem" }}>
            <p>Burada birşey görünmüyor!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
