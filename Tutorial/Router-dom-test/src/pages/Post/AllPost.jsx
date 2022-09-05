import { useParams } from "react-router-dom";
export default function AllPost() {
  const { id, username } = useParams();
  return (
    <>
      <h3>All Post</h3>
      <h3>
        useParams - {id} {username}
      </h3>
    </>
  );
}
