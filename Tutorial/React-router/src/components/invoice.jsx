import { useParams } from "react-router-dom";
import { getInvoices } from "./data";

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoices(parseInt(params.invoiceId, 10));
  return <h2>{params.invoiceId}</h2>;
}
