import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/SubjectList.css";
import ToggleImg from "../assets/images/drop down arrow.png";
import { subjects } from '../data/subjectData'; // Adjust the import path if needed
import Navbar from './Navbar';
import Footer from './Footer';

const SubjectList: React.FC = () => {
  const { branch, year } = useParams<{ branch: string; year: string }>();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const branchSubjects = subjects[branch as keyof typeof subjects];
  const semesterSubjects = branchSubjects?.[year as keyof typeof branchSubjects] || [];

  return (
    <>
      <Navbar />
      <section className="subject-list">
        <h1 className="title">
            {branch} - {year} Semester
          </h1>
        <div className="alpha-container">
          
          <div className="subjects">
            {semesterSubjects.map((subject, index) => (
              <div key={subject.code} className={`subject ${activeIndex === index ? 'active' : ''}`}>
                <div className="subject-header" onClick={() => toggleMenu(index)}>
                  <p className="subject-code">{subject.code}</p>
                  <p className="subject-name">{subject.name}</p>
                  <button aria-label="toggle" className="toggle-btn">
                    <img
                      className={`arrow ${activeIndex === index ? 'rotate' : ''}`}
                      src={ToggleImg}
                      alt="toggle"
                    />
                  </button>
                </div>
                {activeIndex === index && (
                  <div className="subject-resources">
                    <ul>
                      {subject.resources.map((resource, i) => (
                        <li key={i}>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            {resource.type}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SubjectList;
