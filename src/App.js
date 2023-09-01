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
 * - user
 * - token
 *
 * App -> RoutesList
 */
function App() {

  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: ""
  });

  const [token, setToken] = useState("");

  /** temp doc */
  async function signUp(newUserData) {
    await JoblyApi.register(newUserData);
    setToken(JoblyApi.token);
  }

  /** temp doc */
  async function login(userData) {
    await JoblyApi.login(userData);
    setToken(JoblyApi.token);
  }

  /** Logout user, reset token to empty str. */
  function logout() {
    setToken("");
  }

  /** temp doc */
  useEffect(function fetchUserWhenMounted() {
    async function fetchUser() {
      let username;
      if (token) {
        const payload = jwt_decode(token);
        username = payload.username;
        try {
          const userRes = await JoblyApi.getUser(username);
          setUser(userRes);
        } catch (err) {
          console.warn(err);
        }
      }
    }
    fetchUser();
  }, [token]);


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
