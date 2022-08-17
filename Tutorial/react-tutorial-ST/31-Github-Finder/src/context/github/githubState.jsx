import React, { useEffect, useReducer } from "react";
import GithubReducer from "./githubReducer";
import GithubContext from "./GithubContext";
import axios from "axios";

const GithubState = (props) => {
  useEffect(() => {
    dispatch({ type: "SET_LOADING", loading: true });
  }, []);
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = (keyword) => {
    setLoading();
    if (keyword !== "") {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) => {
          dispatch({ type: "SEARCH_USERS", payload: res.data.items });
        });
    } else {
      axios.get("https://api.github.com/users").then((res) => {
        dispatch({ type: "SEARCH_USERS", payload: res.data });
      });
    }
  };
  const getUserRepos = (username) => {
    setLoading(true);
    axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
      dispatch({ type: "GET_REPOS", payload: res.data });
    });
  };
  const getUser = (username) => {
    setLoading(true);
    axios.get(`https://api.github.com/users/${username}`).then((res) => {
      dispatch({ type: "GET_USER", payload: res.data });
    });
  };
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
