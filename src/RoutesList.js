import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobsList';

/**
 *
 */

function RoutesList() {
  return (
    <Routes>
      <Route path="/companies" element={ <CompanyList />}/>

      <Route path="/companies/:handle" element={ <CompanyDetail />}/>

      <Route path="/jobs" element={ <JobsList />}/>

      <Route path="/" element={ <Homepage />}/>

      <Route path="*" element={ <Navigate to="/" />}/>
    </Routes>
  )
}


export default RoutesList;