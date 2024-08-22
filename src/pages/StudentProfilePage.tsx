import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { studentProfiles } from '../data/studentProfilesData';
import linkedinImg from '../assets/images/linkdin.jpg';
import instagramImg from '../assets/images/instagram.jpg';
import githubImg from '../assets/images/github.png';
import twitterImg from '../assets/images/twitter.jpg';
import '../styles/StudentProfilePage.css';

const StudentProfilePage: React.FC = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const navigate = useNavigate();
  const studentProfile = studentProfiles.find(profile => profile.id.toString() === studentId);

  if (!studentProfile) {
    return <div className="min-h-screen flex items-center justify-center text-lg">Student not found</div>;
  }

  const handleMessageClick = () => {
    navigate(`/chat/${studentProfile.id}`); // Navigate to the chat room with studentId
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E0E5EC]">
      <Navbar />
      <main className="mt-20 px-4 md:px-8 lg:px-16">
        <div className="neumorphism mx-auto max-w-7xl rounded-2xl p-6 hover:shadow-[#185282]">
          <div className="flex flex-col md:flex-row items-center md:justify-between p-6">
            <div className="flex flex-col items-center md:flex-row md:items-start">
              <img
                src={studentProfile.profileImage}
                className="neumorphism-img h-48 md:h-60 mx-4 rounded-full"
                alt={studentProfile.name}
              />
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008AFC] to-[#185282]">
                    {studentProfile.name}
                  </span>
                </h1>
                <a className="text-lg font-bold text-[#185282]">{studentProfile.jobTitle}</a>
              </div>
            </div>
            
            <button className="neumorphism-button hover:shadow-[#008AFC]" onClick={handleMessageClick}>
              Message
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {studentProfile.socialLinks.linkedin && (
              <a
                href={studentProfile.socialLinks.linkedin}
                className="neumorphism-inner p-2 rounded-full hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinImg} className="h-10 w-10 neumorphism-img" alt="LinkedIn" />
              </a>
            )}
            {studentProfile.socialLinks.instagram && (
              <a
                href={studentProfile.socialLinks.instagram}
                className="neumorphism-inner p-2 rounded-full hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramImg} className="h-10 w-10 neumorphism-img" alt="Instagram" />
              </a>
            )}
            {studentProfile.socialLinks.github && (
              <a
                href={studentProfile.socialLinks.github}
                className="neumorphism-inner p-2 rounded-full hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubImg} className="h-10 w-10 neumorphism-img" alt="GitHub" />
              </a>
            )}
            {studentProfile.socialLinks.twitter && (
              <a
                href={studentProfile.socialLinks.twitter}
                className="neumorphism-inner p-2 rounded-full hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterImg} className="h-10 w-10 neumorphism-img" alt="Twitter" />
              </a>
            )}
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neumorphism p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Email:</strong> {studentProfile.email}<br />
                  <strong>Phone:</strong> {studentProfile.phone}<br />
                  <strong>Company:</strong> {studentProfile.company}<br />
                  <strong>Experience:</strong> {studentProfile.experience}<br />
                  <strong>Location:</strong> {studentProfile.location}<br />
                </p>
                <h2 className="text-2xl font-bold mb-4">Achievements</h2>
                <p className="text-gray-700 mb-4">
                  {studentProfile.achievements}
                </p>
                <h2 className="text-2xl font-bold mb-4">Certifications</h2>
                <p className="text-gray-700 mb-4">
                  {studentProfile.certifications}
                </p>
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <p className="text-gray-700 mb-4">
                  {studentProfile.projects}
                </p>
              </div>
              <div className="neumorphism p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700 mb-4">
                  {studentProfile.about}
                </p>
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <ul className="list-disc pl-5">
                  {studentProfile.skills.map(skill => (
                    <li key={skill} className="text-gray-700 mb-2">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudentProfilePage;
