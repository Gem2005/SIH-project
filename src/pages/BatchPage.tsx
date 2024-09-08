import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/BatchPage.css';

const BatchPage: React.FC = () => {
  const batchSessions = [
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
  ];

  return (
    <div className="batch-page">
      <Navbar />
      <section className="batch-content">
        <div className="batch-header">
          <h2>Select Your Batch</h2>
        </div>
        <div className="batch-grid">
          {batchSessions.map((session, index) => (
            <Link
              key={index}
              to={`/branch/${session}`}
              className="batch-card"
            >
              {`Graduation year: ${session}`}
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BatchPage;
