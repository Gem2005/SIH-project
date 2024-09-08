// src/data/studentsData.ts
import studentImg5 from '../assets/images/bmen.png';
import studentImg4 from '../assets/images/bmen2.png';
import studentImg2 from '../assets/images/bmen3.png';
import studentImg3 from '../assets/images/bmen.png';
import studentImg1 from '../assets/images/bmen3.png';

export interface StudentSummary {
  id: number;
  name: string;
  rank: string;
  achievements: string;
  imgSrc: string;
}

export const students: StudentSummary[] = [
  { id: 1, name: 'Ayush Yadav', rank: 'Top 1%', achievements: 'Hackathon Winner, Published Paper', imgSrc: studentImg3 },
  { id: 2, name: 'Aarav Sharma', rank: 'Top 10%', achievements: 'IEEE President, Robotics Club Lead', imgSrc: studentImg2 },
  { id: 3, name: 'Gemini Sharma', rank: 'Top 3%', achievements: 'Coding Club Head, ML Researcher', imgSrc: studentImg1 },
  { id: 4, name: 'Santhoshi Pragathi', rank: 'Top 7%', achievements: 'SAE Lead, Robotics Team Member', imgSrc: studentImg4 },
  { id: 5, name: 'Amlan Sarkar', rank: 'Top 15%', achievements: 'Construction Project Head', imgSrc: studentImg5 },
  { id: 6, name: 'Md. Tahir Shaikh', rank: 'Top 5%', achievements: 'IEEE Paper Published, AI Enthusiast', imgSrc: studentImg2 },
  { id: 7, name: 'Sarah Wilson', rank: 'Top 20%', achievements: 'Lab Manager, Chemistry Olympiad Winner', imgSrc: studentImg1 },
  { id: 8, name: 'David Martinez', rank: 'Top 10%', achievements: 'Research Paper Published, Biotech Club Head', imgSrc: studentImg3 },  
  { id: 9, name: 'Laura Scott', rank: 'Top 8%', achievements: 'Robotics Club Member, Project Lead', imgSrc: studentImg4 },
  { id: 10, name: 'Chris Johnson', rank: 'Top 12%', achievements: 'SAE Competition Winner, Design Lead', imgSrc: studentImg5 },
  { id: 11, name: 'Megan Green', rank: 'Top 10%', achievements: 'Architectural Design Winner, Project Lead', imgSrc: studentImg3 },
  { id: 12, name: 'Tom Clark', rank: 'Top 3%', achievements: 'App Developer, Hackathon Winner', imgSrc: studentImg2 },
];
