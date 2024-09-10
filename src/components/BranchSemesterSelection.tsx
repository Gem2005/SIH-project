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
            Branch :
            <select value={branch} onChange={(e) => setBranch(e.target.value)} className="neomorphic-select">
              <option value="" align="center" >--Select Branch--</option>
              <option value="CSE" align="center">Computer Science</option>
              <option value="ECE" align="center">Electronics and Communication Engineering</option>
              <option value="Electrical" align="center">Electrical Engineering</option>
            </select>
          </label>
        </div>
        <div className="select-container">
          <label>
            Semester :
            <select value={semester} onChange={(e) => setSemester(e.target.value)} className="neomorphic-select">
              <option value="" align="center" id="p1">--Select Semester--</option>
              <option value="1st" align="center">1st Semester</option>
              <option value="2nd" align="center">2nd Semester</option>
              <option value="3rd" align="center">3rd Semester</option>
              <option value="4th" align="center">4th Semester</option>
              <option value="5th" align="center">5th Semester</option>
              <option value="6th" align="center">6th Semester</option>
              <option value="7th" align="center">7th Semester</option>
              <option value="8th" align="center">8th Semester</option>
            </select>
          </label>
        </div>
        <button onClick={handleSubmit} className="neomorphic-button"><b>Submit</b></button>
      </div>
      <Footer />
    </>
  );
};

export default BranchSemesterSelection;
