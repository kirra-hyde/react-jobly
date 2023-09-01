import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { useState, useEffect} from 'react';
import JoblyApi from './api';

/** App
 *
 * App -> RoutesList
 */
function App() {
  const [user, setUser] = useState({
    username: null,
    firstName: null,
    lastName: null,
    email: null
  })

  console.log("user", user)

  async function signUp(newUserData) {
    const result = await JoblyApi.register(newUserData);
    console.log("Result is:", result);
    setUser(result);
    console.log("user - post render", user)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList signUp={ signUp }/>
      </BrowserRouter>
    </div>
  );
}

export default App;
