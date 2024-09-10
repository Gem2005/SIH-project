import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BranchSemesterSelection.css';
import Navbar from './Navbar';
import Footer from './Footer';

const BranchSemesterSelection: React.FC = () => {
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (branch && semester) {
      navigate(`/study-material/${branch}/${semester}`);
    } else {
      alert('Please select both branch and semester.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="branch-semester-selection mt-32">
        <h2>Select Your Branch and Semester</h2>
        <div className="select-container">
          <label>
            Branch:
            <select value={branch} onChange={(e) => setBranch(e.target.value)} className="neomorphic-select">
              <option value="">Select Branch</option>
              <option value="IT">Information Technology</option>
              <option value="Civil">Civil Engineering</option>
              <option value="Electrical">Electrical Engineering</option>
            </select>
          </label>
        </div>
        <div className="select-container">
          <label>
            Semester:
            <select value={semester} onChange={(e) => setSemester(e.target.value)} className="neomorphic-select">
              <option value="">Select Semester</option>
              <option value="1st">1st Semester</option>
              <option value="2nd">2nd Semester</option>
              <option value="3rd">3rd Semester</option>
              <option value="4th">4th Semester</option>
              <option value="5th">5th Semester</option>
              <option value="6th">6th Semester</option>
              <option value="7th">7th Semester</option>
              <option value="8th">8th Semester</option>
            </select>
          </label>
        </div>
        <button onClick={handleSubmit} className="neomorphic-button">Submit</button>
      </div>
      <Footer />
    </>
  );
};

export default BranchSemesterSelection;
