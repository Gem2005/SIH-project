import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BatchPage from './pages/BatchPage';
import BranchPage from './pages/BranchPage';
import StudentsPage from './pages/StudentsPage';
import StudentProfilePage from './pages/StudentProfilePage';
import BranchSemesterSelection from './components/BranchSemesterSelection';
import SubjectList from './components/SubjectList';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './components/BlogPage';
import BlogSection from './components/BlogSection';
import FAQ from './pages/FAQ';

import RegisterPage from './pages/RegisterPage';
import ForgetPassword from './pages/ForgetPassword';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Authentication Pages */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />

        {/* FAQ Page */}
        <Route path="/faq" element={<FAQ />} />

        {/* Alumni Feature Routes */}
        <Route path="/batch" element={<BatchPage />} />
        <Route path="/branch/:batchYear" element={<BranchPage />} />
        <Route path="/students/:batchYear/:branchName" element={<StudentsPage />} />
        <Route path="/student/:studentId" element={<StudentProfilePage />} />

        {/* Blog Feature Routes */}
        <Route path="/blog" element={<BlogPage />} /> {/* Blog list page */}
        <Route path="/blog/:id" element={<BlogSection />} /> {/* Blog detail page */}

        {/* Notes Feature Routes */}
        <Route path="/study-material" element={<BranchSemesterSelection />} />
        <Route path="/study-material/:branch/:year" element={<SubjectList />} />

        {/* 404 Not Found Route */}
        <Route path="" element={<NotFoundPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;