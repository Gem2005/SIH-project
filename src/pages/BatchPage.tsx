import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/BatchPage.css';

const BatchPage: React.FC = () => {
  const batchSessions = [
    '2010-2014',
    '2011-2015',
    '2012-2016',
    '2013-2017',
    '2014-2018',
    '2015-2019',
    '2016-2020',
    '2017-2021',
    '2018-2022',
    '2019-2023',
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
              {`SESSION ${session}`}
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BatchPage;
