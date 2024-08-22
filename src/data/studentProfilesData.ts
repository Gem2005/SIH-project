import studentImg1 from '../assets/images/Arpan3.jpg';
import studentImg2 from '../assets/images/arpan7.jpg';

export interface StudentProfile {
  id: number;
  name: string;
  jobTitle: string;
  profileImage: string;
  about: string;
  email: string;
  phone: string;
  company: string;
  experience: string;
  location: string;
  achievements: string;
  certifications: string;
  projects: string;
  skills: string[];
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    github?: string;
    twitter?: string;
  };
}

export const studentProfiles: StudentProfile[] = [
  {
    id: 1,
    name: 'John Doe',
    jobTitle: 'Web Developer',
    profileImage: studentImg1,
    about: 'Passionate web developer with a love for creating intuitive and user-friendly interfaces.',
    email: 'john.doe@example.com',
    phone: '+91 123 456 7890',
    company: 'Tech Innovations',
    experience: '3 Years',
    location: 'New Delhi',
    achievements: 'Hackathon Winner, Published Research Paper on Web Technologies',
    certifications: 'Certified Full Stack Developer, Advanced JavaScript Programming',
    projects: 'E-commerce Platform, Real-time Chat Application',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/johndoe/',
      instagram: 'https://www.instagram.com/johndoe/',
      github: 'https://github.com/johndoe',
      twitter: 'https://twitter.com/johndoe'
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    jobTitle: 'Data Scientist',
    profileImage: studentImg2,
    about: 'Data scientist with a strong background in machine learning and data analysis.',
    email: 'jane.smith@example.com',
    phone: '+91 987 654 3210',
    company: 'Data Solutions Inc.',
    experience: '5 Years',
    location: 'Mumbai',
    achievements: 'Winner of Data Science Competition, Published Paper on Predictive Analytics',
    certifications: 'Certified Data Scientist, Machine Learning Specialist',
    projects: 'Customer Segmentation Analysis, Predictive Maintenance System',
    skills: ['Python', 'R', 'SQL', 'TensorFlow', 'Pandas'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/janesmith/',
      instagram: 'https://www.instagram.com/janesmith/',
      github: 'https://github.com/janesmith',
      twitter: 'https://twitter.com/janesmith'
    }
  },
  {
    id: 3,
    name: 'Alice Johnson',
    jobTitle: 'UX/UI Designer',
    profileImage: studentImg1,
    about: 'Creative UX/UI designer with a passion for crafting engaging user experiences.',
    email: 'alice.johnson@example.com',
    phone: '+91 345 678 9012',
    company: 'Design Studio',
    experience: '4 Years',
    location: 'Bangalore',
    achievements: 'Awarded Best UX Design in 2022, Designed Top-Rated Mobile App',
    certifications: 'Certified UX Designer, Advanced Adobe XD',
    projects: 'Mobile App Redesign, User Experience Research',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/alicejohnson/',
      instagram: 'https://www.instagram.com/alicejohnson/',
      github: 'https://github.com/alicejohnson',
      twitter: 'https://twitter.com/alicejohnson'
    }
  },
  {
    id: 4,
    name: 'Bob Lee',
    jobTitle: 'Software Engineer',
    profileImage: studentImg2,
    about: 'Software engineer with expertise in building scalable web applications.',
    email: 'bob.lee@example.com',
    phone: '+91 456 789 0123',
    company: 'Code Masters',
    experience: '6 Years',
    location: 'Hyderabad',
    achievements: 'Developed High-Traffic Web App, Received Best Software Engineer Award',
    certifications: 'Certified Software Engineer, Cloud Computing Specialist',
    projects: 'High-Traffic Web Application, Cloud-Based System',
    skills: ['Java', 'Spring Boot', 'Docker', 'Kubernetes'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/boblee/',
      instagram: 'https://www.instagram.com/boblee/',
      github: 'https://github.com/boblee',
      twitter: 'https://twitter.com/boblee'
    }
  },
  {
    id: 5,
    name: 'Emily Davis',
    jobTitle: 'Machine Learning Engineer',
    profileImage: studentImg1,
    about: 'Machine learning engineer specializing in artificial intelligence and predictive modeling.',
    email: 'emily.davis@example.com',
    phone: '+91 567 890 1234',
    company: 'AI Labs',
    experience: '5 Years',
    location: 'Pune',
    achievements: 'Developed Award-Winning AI Model, Published in Leading ML Journal',
    certifications: 'Certified Machine Learning Engineer, Advanced AI Techniques',
    projects: 'Predictive Modeling, AI-Powered Recommendation System',
    skills: ['Python', 'TensorFlow', 'Keras', 'Scikit-Learn'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/emilydavis/',
      instagram: 'https://www.instagram.com/emilydavis/',
      github: 'https://github.com/emilydavis',
      twitter: 'https://twitter.com/emilydavis'
    }
  },
  {
    id: 6,
    name: 'Michael Brown',
    jobTitle: 'Cybersecurity Analyst',
    profileImage: studentImg2,
    about: 'Expert in cybersecurity with a focus on protecting systems from cyber threats.',
    email: 'michael.brown@example.com',
    phone: '+91 678 901 2345',
    company: 'SecureNet',
    experience: '7 Years',
    location: 'Delhi',
    achievements: 'Mitigated Major Cyber Attack, Developed Security Protocols',
    certifications: 'Certified Ethical Hacker, CISSP',
    projects: 'Security Protocol Development, Incident Response',
    skills: ['Network Security', 'Penetration Testing', 'Cryptography'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/michaelbrown/',
      instagram: 'https://www.instagram.com/michaelbrown/',
      github: 'https://github.com/michaelbrown',
      twitter: 'https://twitter.com/michaelbrown'
    }
  },
  {
    id: 7,
    name: 'Sarah Wilson',
    jobTitle: 'Digital Marketer',
    profileImage: studentImg1,
    about: 'Digital marketer with expertise in online campaigns and SEO.',
    email: 'sarah.wilson@example.com',
    phone: '+91 789 012 3456',
    company: 'MarketPro',
    experience: '4 Years',
    location: 'Kolkata',
    achievements: 'Increased Website Traffic by 50%, Awarded Best Digital Campaign',
    certifications: 'Certified Digital Marketer, SEO Specialist',
    projects: 'SEO Optimization, Social Media Campaigns',
    skills: ['SEO', 'Content Marketing', 'Google Analytics', 'Social Media Management'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/sarahwilson/',
      instagram: 'https://www.instagram.com/sarahwilson/',
      github: 'https://github.com/sarahwilson',
      twitter: 'https://twitter.com/sarahwilson'
    }
  },
  {
    id: 8,
    name: 'David Martinez',
    jobTitle: 'Database Administrator',
    profileImage: studentImg2,
    about: 'Experienced DBA specializing in database management and optimization.',
    email: 'david.martinez@example.com',
    phone: '+91 890 123 4567',
    company: 'DataCorp',
    experience: '6 Years',
    location: 'Chennai',
    achievements: 'Optimized Database Performance, Implemented Backup Solutions',
    certifications: 'Certified Database Administrator, SQL Specialist',
    projects: 'Database Optimization, Data Migration',
    skills: ['SQL', 'Oracle', 'Database Management', 'Data Warehousing'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/davidmartinez/',
      instagram: 'https://www.instagram.com/davidmartinez/',
      github: 'https://github.com/davidmartinez',
      twitter: 'https://twitter.com/davidmartinez'
    }
  },
  {
    id: 9,
    name: 'Laura Scott',
    jobTitle: 'Product Manager',
    profileImage: studentImg1,
    about: 'Product manager with a background in leading cross-functional teams to launch successful products.',
    email: 'laura.scott@example.com',
    phone: '+91 901 234 5678',
    company: 'InnovateTech',
    experience: '8 Years',
    location: 'Noida',
    achievements: 'Launched Award-Winning Product, Managed Multimillion-Dollar Projects',
    certifications: 'Certified Product Manager, Agile Specialist',
    projects: 'Product Launch, Market Research',
    skills: ['Product Management', 'Agile', 'Project Management', 'Market Research'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/laurascott/',
      instagram: 'https://www.instagram.com/laurascott/',
      github: 'https://github.com/laurascott',
      twitter: 'https://twitter.com/laurascott'
    }
  },
  {
    id: 10,
    name: 'Chris Johnson',
    jobTitle: 'Systems Analyst',
    profileImage: studentImg2,
    about: 'Systems analyst with experience in analyzing and improving IT systems.',
    email: 'chris.johnson@example.com',
    phone: '+91 012 345 6789',
    company: 'TechSys',
    experience: '5 Years',
    location: 'Gurgaon',
    achievements: 'Improved IT System Efficiency, Led Systems Integration Project',
    certifications: 'Certified Systems Analyst, ITIL Specialist',
    projects: 'IT System Analysis, Systems Integration',
    skills: ['System Analysis', 'ITIL', 'Business Analysis', 'Process Improvement'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/chrisjohnson/',
      instagram: 'https://www.instagram.com/chrisjohnson/',
      github: 'https://github.com/chrisjohnson',
      twitter: 'https://twitter.com/chrisjohnson'
    }
  },
  {
    id: 11,
    name: 'Megan Green',
    jobTitle: 'Graphic Designer',
    profileImage: studentImg1,
    about: 'Graphic designer with a flair for creating visually appealing designs.',
    email: 'megan.green@example.com',
    phone: '+91 123 456 7890',
    company: 'DesignWorks',
    experience: '4 Years',
    location: 'Jaipur',
    achievements: 'Designed Award-Winning Marketing Materials, Featured in Design Magazine',
    certifications: 'Certified Graphic Designer, Adobe Illustrator Specialist',
    projects: 'Marketing Material Design, Branding Projects',
    skills: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Branding'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/megangreen/',
      instagram: 'https://www.instagram.com/megangreen/',
      github: 'https://github.com/megangreen',
      twitter: 'https://twitter.com/megangreen'
    }
  },
  {
    id: 12,
    name: 'Tom Clark',
    jobTitle: 'Network Engineer',
    profileImage: studentImg2,
    about: 'Network engineer with expertise in managing and optimizing network infrastructure.',
    email: 'tom.clark@example.com',
    phone: '+91 234 567 8901',
    company: 'NetWorks',
    experience: '6 Years',
    location: 'Kolkata',
    achievements: 'Optimized Network Performance, Implemented Secure Network Solutions',
    certifications: 'Certified Network Engineer, Cisco Specialist',
    projects: 'Network Optimization, Security Implementation',
    skills: ['Networking', 'Cisco', 'Network Security', 'Troubleshooting'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/tomclark/',
      instagram: 'https://www.instagram.com/tomclark/',
      github: 'https://github.com/tomclark',
      twitter: 'https://twitter.com/tomclark'
    }
  }
];
