import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import DynamicNavbarTest from './ReactJs/PracticeUIExamples/DynamicNavbarTest';
import AuthorizedLayout from './AuthorizedLayout/AuthorizedLayout';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  

  return (
    <>    
       <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dynamic-routes" element={<DynamicNavbarTest />} />
          <Route path="/dashboard" element={<AuthorizedLayout />}>
            <Route index element={<Dashboard />} />      
            {/* <Route path="users" element={<UsersPage />} />  */}
          </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
