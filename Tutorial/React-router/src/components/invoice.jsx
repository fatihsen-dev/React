import { useParams } from "react-router-dom";
export default function Invoice() {
  let params = useParams();
  return <h2>{params.invoiceId}</h2>;
}
