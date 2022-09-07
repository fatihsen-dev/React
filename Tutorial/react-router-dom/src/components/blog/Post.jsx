import { useParams } from "react-router-dom";

export default function Post() {
  const { id, url } = useParams();
  return (
    <h4>
      Blog Post = {id} - {url}
    </h4>
  );
}
