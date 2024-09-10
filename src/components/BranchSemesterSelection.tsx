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
            <p id="c1">Branch :</p>
            <select value={branch} onChange={(e) => setBranch(e.target.value)} className="neomorphic-select">
              <option value=""  id="p1">-- Select Branch --</option>
              <option value="CSE" id="p1">Computer Science</option>
              <option value="ECE" id="p1">Electronics and Communication Engineering</option>
              <option value="Electrical" id="p1">Electrical Engineering</option>
            </select>
          </label>
        </div>
        <div className="select-container">
          <label>
            <p id="c1">Semester :</p>
            <select value={semester} onChange={(e) => setSemester(e.target.value)} className="neomorphic-select">
              <option value=""  id="p1">-- Select Semester --</option>
              <option value="1st" id="p1">1st Semester</option>
              <option value="2nd" id="p1">2nd Semester</option>
              <option value="3rd" id="p1">3rd Semester</option>
              <option value="4th" id="p1">4th Semester</option>
              <option value="5th" id="p1">5th Semester</option>
              <option value="6th" id="p1">6th Semester</option>
              <option value="7th" id="p1">7th Semester</option>
              <option value="8th" id="p1">8th Semester</option>
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
