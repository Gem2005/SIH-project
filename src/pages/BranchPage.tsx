import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import '../styles/BranchPage.css';

const BranchPage: React.FC = () => {
  const { batchYear } = useParams<{ batchYear: string }>();

  const branches = [
    'Computer Science Engineering',
    'Computer Science Engineering - AI/ML',
    'Computer Science Engineering - CPS',
    'Electronics and Computer Engineering',
    'Electronics adn Communication Engineering',
    'Civil Engineering',
    'Electrical Engineering',
  ];

  return (
    <>
    <Navbar /> 
   
    <div className="branch-page ">
      
      
      <section className="branch-content">
        <div className="branch-header">
          <h2>{`BATCH ${batchYear}`}</h2>
          <p>Select a Branch</p>
        </div>
        <div className="branch-grid">
          {branches.map((branch, index) => (
            <Link
              key={index}
              to={`/students/${batchYear}/${branch}`} // Pass both batchYear and branchName
              className="branch-card"
            >
              {branch}
            </Link>
          ))}
        </div>
      </section>

      <Footer /> 
    </div>
    </>
  );
};

export default BranchPage;
