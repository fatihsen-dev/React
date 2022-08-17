import React, { useContext, useState } from "react";
import AlertContext from "../context/alert/alertContext";
import GithubContext from "../context/github/GithubContext";

const Search = () => {
  const [keyword, setKeword] = useState("");

  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const onInput = (e) => {
    setKeword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword === "") {
      setAlert("Bu alan Boş brakılamaz!", "error");
    } else {
      setAlert("Veriler alınıdı.", "success");
      searchUsers(keyword);
      setKeword("");
    }
  };
  return (
    <div className='container flex rounded-sm mt-4 p-2 bg-[#172a40] bg-opacity-80 gap-2 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row'>
      <form
        onSubmit={onSubmit}
        className='flex flex-1 rounded-sm gap-2 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row'
      >
        <input
          onInput={onInput}
          className='text-[#172a40] flex-1 outline-none px-2 text-xl font-medium p-1 placeholder-[#9fadbf] rounded-sm'
          type='text'
          value={keyword}
          placeholder='Enter username'
          name='inputText'
        />
        <button
          type='submit'
          className='bg-[#172a40] hover:bg-opacity-70 px-4 text-white font-medium rounded-sm'
        >
          Search
        </button>
      </form>
      {users.length > 0 ? (
        <button
          onClick={clearUsers}
          className='bg-[#172a40] hover:bg-opacity-70 px-4 text-white font-medium rounded-sm'
        >
          Reset result
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
