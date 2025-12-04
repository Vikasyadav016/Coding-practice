import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-calendar-heatmap/dist/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import DynamicNavbarTest from './ReactJs/PracticeUIExamples/DynamicNavbarTest';
import AuthorizedLayout from './AuthorizedLayout/AuthorizedLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import CourseList from './Courses/CourseList';
import AddTutorOrTeacher from './Pages/Institute/AddTutor/Addtutor';
import InstituteDashboard from './Pages/Institute/InstituteDashboard';
import ManageContent from './Pages/CourseManagement/ManageCourseContent';
import AddCourse from './Pages/CourseManagement/AddCourse';
import EditCourse from './Pages/CourseManagement/EditCourse';
import AddLessonModal from './Pages/CourseManagement/AddLessionModal';
import AnalyticsDashboard from './Pages/Teacher-Tutor/TutorAnalyticsDashboard';
import CourseWizard from './Pages/CreateCourseWizard/CourseWizard';
import ProfileContainer from './Pages/UserProfile/ProfileContainer';

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
            <Route path='profile' element={<ProfileContainer />} />
          </Route>
          <Route path="/institute-dashboard" element={<AuthorizedLayout />}>
            <Route index element={<InstituteDashboard />} />
            <Route path="add/teacher/tutor" element={<AddTutorOrTeacher />} />
            <Route path='manage-course/add' element={<AddCourse />} />
            <Route path='manage-course/edit' element={<EditCourse />} />
            <Route path='manage-course/add-lesson' element={<AddLessonModal />} />
            <Route path='manage-course/content' element={<ManageContent />} />
            <Route path='profile' element={<ProfileContainer />} />
          </Route>
          <Route path="/tutor-dashboard" element={<AuthorizedLayout />}>
            <Route index element={<AnalyticsDashboard />} />
            <Route path='course-wizard' element={<CourseWizard />} />
            <Route path='profile' element={<ProfileContainer />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
