import React from "react";
import { getInvoices } from "./daha";
import { Link, Outlet } from "react-router-dom";

export default function Invoices() {
  const invoices = getInvoices();

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ padding: "1rem", borderRight: "1px solid" }}>
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
