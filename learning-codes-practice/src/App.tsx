import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import DynamicNavbarTest from './ReactJs/PracticeUIExamples/DynamicNavbarTest';
import AuthorizedLayout from './AuthorizedLayout/AuthorizedLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import CourseList from './Courses/CourseList';
import AddTutorOrTeacher from './Pages/Institute/AddTutor/Addtutor';
import InstituteDashboard from './Pages/Institute/InstituteDashboard';
import "react-calendar-heatmap/dist/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

function App() {
  

  return (
    <>    
       <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dynamic-routes" element={<DynamicNavbarTest />} />
          <Route path="/dashboard" element={<AuthorizedLayout />}>
            <Route index element={<Dashboard />} />      
            <Route path="course" element={<CourseList />} /> 
          </Route>
           <Route path="/institute-dashboard" element={<AuthorizedLayout />}>
            <Route index element={<InstituteDashboard />} />      
            <Route path="add/teacher/tutor" element={<AddTutorOrTeacher />} /> 
          </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
