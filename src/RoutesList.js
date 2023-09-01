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
 * Props: none
 *
 * State: none
 *
 * App -> RoutesList -> { CompanyList, CompanyDetail, JobsList, Homepage}
 */

function RoutesList({ signUp }) {
  return (
    <Routes>
      <Route path="/companies" element={ <CompanyList />}/>

      <Route path="/companies/:handle" element={ <CompanyDetail />}/>

      <Route path="/jobs" element={ <JobList />}/>

      <Route path="/" element={ <Homepage />}/>

      <Route path="/login" element={ <LoginForm login={login}/>}/>

      <Route path="/signup" element={ <SignupForm signUp={signUp}/>}/>

      {/* <Route path="/profile"
             element={ <ProfileForm editUser={editUser} user={user}/>} /> */}

      <Route path="*" element={ <Navigate to="/" />}/>
    </Routes>
  )
}


export default RoutesList;