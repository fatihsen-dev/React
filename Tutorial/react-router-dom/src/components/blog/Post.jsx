import { useParams } from "react-router-dom";

export default function Post() {
  const { baslik, baslikId } = useParams();
  return (
    <h4>
      Blog Post = {baslikId} - {baslik}
    </h4>
  );
}
