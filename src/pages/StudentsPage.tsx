import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { students } from '../data/studentsData';

const StudentsPage: React.FC = () => {
  const { batchYear, branchName } = useParams<{ batchYear: string; branchName: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-16 mt-10 px-4 md:px-8 lg:px-16 xl:px-24 bg-[#E0E5EC]">
        <h1 className="text-2xl font-semibold mb-8">
          Students for {branchName} - Batch {batchYear}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {students.map((student) => (
            <Link key={student.id} to={`/student/${student.id}`}>
              <div className="flex flex-col items-center justify-center p-4 bg-[#E0E5EC] rounded-[20px] shadow-[6px_6px_12px_rgba(0,0,0,0.1),_-6px_-6px_12px_rgba(255,255,255,0.7)] transition-shadow duration-300 ease-in-out hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),_inset_-6px_-6px_12px_rgba(255,255,255,0.7)]">
                <img
                  src={student.imgSrc}
                  alt={student.name}
                  className="rounded-full w-24 h-24 md:w-28 md:h-28 object-cover shadow-inner mb-4"
                />
                <h3 className="text-[#1E2A38] text-lg font-semibold mb-1">
                  {student.name}
                </h3>
                <p className="text-[#1E2A38] text-sm">{branchName}</p>
                <p className="text-[#1E2A38] text-sm mb-2">Batch {batchYear}</p>
                <p className="text-[#008AFC] text-sm font-bold">{student.rank}</p>
                <p className="text-[#1E2A38] text-xs text-center">{student.achievements}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentsPage;
