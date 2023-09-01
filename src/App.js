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

  async function signUp(newUserData) {
    console.log("Do we get in signUp?");
    const result = await JoblyApi.register(newUserData);
    setUser(result);
    // console.log("Result is:", result);
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
