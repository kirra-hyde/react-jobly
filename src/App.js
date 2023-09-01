import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { useState, useEffect } from 'react';
import JoblyApi from './api';
import jwt_decode from "jwt-decode";
import userContext from './userContext';


/** App
 *
 * State:
 * - user, like { username, firstName, lastName, email}
 * - token
 *
 * App -> RoutesList
 */

function App() {
  // rmv comment
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: ""
  });

  const [token, setToken] = useState("");

  /** Register a new user and update token */
  async function signUp(newUserData) {
    try {
      await JoblyApi.register(newUserData);
      setToken(JoblyApi.token);
    } catch (err) {
      alert(err);
    }
  }

  /** Login an existing user and update token */
  async function login(userData) {
    try {
      await JoblyApi.login(userData);
      setToken(JoblyApi.token);
      localStorage.setItem('token', JSON.stringify(JoblyApi.token));
    } catch (err) {
      alert(err);
    }
  }

  /** Logout user, update token to empty string */
  function logout() {
    setToken("");
    JoblyApi.token = "";
  }

  useEffect(function fetchUserWhenMountedOrTokenChange() {
    async function fetchUser() {
      if (token) {
        const payload = jwt_decode(token);
        let username = payload.username;
        try {
          const userRes = await JoblyApi.getUser(username); // userData
          setUser(userRes);
        } catch (err) {
          console.warn(err);
        }
      } else {
        setUser({
          username: "",
          firstName: "",
          lastName: "",
          email: ""
        });
      }
    }
    fetchUser();
  }, [token]);

  console.log("our user:", user);
  console.log("our token", token);

  return (
    <div className="App">
      <userContext.Provider value={{
        username: user.username,
        firstName: user.firstName
      }}>
        <BrowserRouter>
          <Navigation auth={token} logout={logout} />
          <RoutesList
            signUp={signUp}
            login={login}
            auth={token} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
