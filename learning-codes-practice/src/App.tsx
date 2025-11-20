
import './App.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// import PageWhereSeeOrUpdateDetails from './ReactJs/PracticeUIExamples/PageWhereUpdateDetails'
import LandingPage from './Components/LandingPage/LandingPage';
// import SelectPreferredLanguage from './ReactJs/PracticeUIExamples/SelectPreferredLanguage'
// import MultiFieldsForm from './ReactJs/PracticeUIExamples/MultiFieldsForm'
// import LoopsInJavascript from './JavaScript/JSFundamentals/Loops'
// import ChangeFontSize from './ReactJs/PracticeUIExamples/FontSizeChanges'
// import TypeConversion from './JavaScript/JSFundamentals/TypeConversion'
import { Route, BrowserRouter as Router, Routes } from 'react-router';

function App() {
  

  return (
    <>
      {/* <TypeConversion /> */}
      {/* <LoopsInJavascript /> */}
      {/* <ChangeFontSize /> */}
      {/* <SelectPreferredLanguage /> */}
      {/* <MultiFieldsForm /> */}
      {/* <PageWhereSeeOrUpdateDetails /> */}
      
       <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
