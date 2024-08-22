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
import ChatPage from './pages/chatpage/ChatPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* for alumini list features */}
        
        <Route path="/batch" element={<BatchPage />} />
        <Route path="/branch/:batchYear" element={<BranchPage />} />
        <Route path="/students/:batchYear/:branchName" element={<StudentsPage />} />
        <Route path="/student/:studentId" element={<StudentProfilePage />} />

        {/* for chat feature  */}
        <Route path="/chat/:studentId" element={<ChatPage />} />

        {/* for notes feature */}
        <Route path="/study-material" element={<BranchSemesterSelection />} />
        <Route path="/study-material/:branch/:year" element={<SubjectList />} />


        {/* for error page  */}
        <Route path="*" element={<NotFoundPage />} /> {/* Optional route for 404 errors */}
      
      </Routes>
    </Router>
  );
};

export default App;
