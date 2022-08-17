//* import React
import React from "react";
import GithubState from "../context/github/githubState";
import AlertState from "../context/alert/alertState";
import Alert from "./Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//* Other import
import "../styles/index.css"; // style file

//* Component
import NavBar from "./NavBar";
import Users from "./Users";
import Search from "./Search";
import About from "./About";
import UserDatails from "./UserDatails";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Alert />
          <div className='flex flex-col items-center px-2'>
            <NavBar title='Github Finder' />
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <>
                    <Search />
                    <Users />
                  </>
                )}
              />
              <Route path='/about' component={About} />
              <Route path='/user/:login' component={UserDatails} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};
export default App;
