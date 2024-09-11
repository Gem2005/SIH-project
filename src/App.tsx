import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
 // Fixed typo
import BatchPage from './pages/BatchPage';
import BranchPage from './pages/BranchPage';
import StudentsPage from './pages/StudentsPage';
import StudentProfilePage from './pages/StudentProfilePage';
import BranchSemesterSelection from './components/BranchSemesterSelection';
import SubjectList from './components/SubjectList';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './pages/BlogPage';
import FAQ from './pages/FAQ';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgetPassword from './pages/ForgetPassword';
import BlogSection from '@components/BlogSection';

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />



        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/faq" element={<FAQ />} />
        {/* for alumini list features */}
        
       
        <Route path="/batch" element={<BatchPage />} />
        <Route path="/branch/:batchYear" element={<BranchPage />} />
        <Route path="/students/:batchYear/:branchName" element={<StudentsPage />} />
        <Route path="/student/:studentId" element={<StudentProfilePage />} />

      

        {/* for notes feature */}
        <Route path="/study-material" element={<BranchSemesterSelection />} />
        <Route path="/study-material/:branch/:year" element={<SubjectList />} />

        {/* for  blog feature */}
        <Route path="/blogs/:id" element={<BlogPage/>} />
        <Route path="/blogs" element={<BlogSection/>}/>


        {/* for error page  */}
        <Route path="*" element={<NotFoundPage />} /> {/* Optional route for 404 errors */}
      
      </Routes>
    </Router>
    </>
  );
};

export default App;
