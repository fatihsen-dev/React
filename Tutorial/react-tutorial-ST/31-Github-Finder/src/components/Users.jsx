import React, { useContext } from "react";
import User from "./User";
import Loading from "./Loading";
import GithubContext from "../context/github/GithubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className='container grid py-4 mb-16 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

export default Users;
