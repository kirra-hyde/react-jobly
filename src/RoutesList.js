import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';

/** Define routes.
 *
 * Props:
 *  - signUp fn
 *  - login fn
 *  - auth: token
 *
 * State: none
 *
 * App -> RoutesList -> { CompanyList, CompanyDetail, JobsList, Homepage}
 */

function RoutesList({ signUp, login, auth }) {
  if (!auth){
    return (
      <Routes>
        <Route path="/login" element={ <LoginForm login={login}/>}/>

        <Route path="/signup" element={ <SignupForm signUp={signUp}/>}/>

        <Route path="/" element={ <Homepage />}/>

        <Route path="*" element={ <Navigate to="/" />}/>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/companies" element={ <CompanyList />}/>

      <Route path="/companies/:handle" element={ <CompanyDetail />}/>

      <Route path="/jobs" element={ <JobList />}/>

      <Route path="/" element={ <Homepage />}/>

      {/* <Route path="/profile"
             element={ <ProfileForm editUser={editUser} user={user}/>} /> */}

      <Route path="*" element={ <Navigate to="/" />}/>
    </Routes>
  )
}


export default RoutesList;