// src/data/studentsData.ts
import studentImg1 from '../assets/images/Arpan3.jpg';
import studentImg2 from '../assets/images/arpan7.jpg';

export interface StudentSummary {
  id: number;
  name: string;
  rank: string;
  achievements: string;
  imgSrc: string;
}

export const students: StudentSummary[] = [
  { id: 1, name: 'John Doe', rank: 'Top 5%', achievements: 'Hackathon Winner, Published Paper', imgSrc: studentImg1 },
  { id: 2, name: 'Jane Smith', rank: 'Top 10%', achievements: 'IEEE President, Robotics Club Lead', imgSrc: studentImg2 },
  { id: 3, name: 'Alice Johnson', rank: 'Top 3%', achievements: 'Coding Club Head, ML Researcher', imgSrc: studentImg1 },
  { id: 4, name: 'Bob Brown', rank: 'Top 7%', achievements: 'SAE Lead, Robotics Team Member', imgSrc: studentImg2 },
  { id: 5, name: 'Charlie Davis', rank: 'Top 15%', achievements: 'Construction Project Head', imgSrc: studentImg1 },
  { id: 6, name: 'Diana Wilson', rank: 'Top 5%', achievements: 'IEEE Paper Published, AI Enthusiast', imgSrc: studentImg2 },
  { id: 7, name: 'Evan Martinez', rank: 'Top 20%', achievements: 'Lab Manager, Chemistry Olympiad Winner', imgSrc: studentImg1 },
  { id: 8, name: 'Fiona Moore', rank: 'Top 10%', achievements: 'Research Paper Published, Biotech Club Head', imgSrc: studentImg2 },
  { id: 9, name: 'George Clark', rank: 'Top 3%', achievements: 'App Developer, Hackathon Winner', imgSrc: studentImg1 },
  { id: 10, name: 'Hannah Lee', rank: 'Top 8%', achievements: 'Robotics Club Member, Project Lead', imgSrc: studentImg2 },
  { id: 11, name: 'Ian Walker', rank: 'Top 12%', achievements: 'SAE Competition Winner, Design Lead', imgSrc: studentImg1 },
  { id: 12, name: 'Jasmine Perez', rank: 'Top 10%', achievements: 'Architectural Design Winner, Project Lead', imgSrc: studentImg2 },
];
