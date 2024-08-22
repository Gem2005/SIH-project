export interface Resource {
  type: string;
  url: string;
}

export interface Subject {
  code: string;
  name: string;
  resources: Resource[];
}

export interface SemesterSubjects {
  [semester: string]: Subject[];
}

export interface BranchSubjects {
  [branch: string]: SemesterSubjects;
}

export const subjects: BranchSubjects = {
  IT: {
    '1st': [
      {
        code: 'KAS102T',
        name: 'Engineering Chemistry',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KAS103T',
        name: 'Engineering Mathematics-I',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KAS104T',
        name: 'Engineering Physics',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KAS105T',
        name: 'Basic Mechanical Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '2nd': [
      {
        code: 'KEE101T',
        name: 'Basic Electrical Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: 'https://drive.google.com/drive/u/1/folders/19eaMD-4bOJg2J0b9j8J0rmgBvqs2Z6Qd' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS101T',
        name: 'Programming for Problem Solving',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS102T',
        name: 'Digital Logic Design',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS103T',
        name: 'Computer Organization',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '3rd': [
      {
        code: 'KMC101',
        name: 'AI For Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: 'https://drive.google.com/drive/u/1/folders/1rWJ9NIM2B7s7l537VsdllaCeA79j37cU' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KNC101',
        name: 'Soft Skill I',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS201',
        name: 'Data Structures and Algorithms',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS202',
        name: 'Database Management Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '4th': [
      {
        code: 'KCS301',
        name: 'Operating Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS302',
        name: 'Computer Networks',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS303',
        name: 'Software Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS304',
        name: 'Web Technologies',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '5th': [
      {
        code: 'KCS401',
        name: 'Computer Graphics',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS402',
        name: 'Artificial Intelligence',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS403',
        name: 'Machine Learning',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS404',
        name: 'Cyber Security',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '6th': [
      {
        code: 'KCS501',
        name: 'Cloud Computing',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS502',
        name: 'Big Data Analytics',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS503',
        name: 'Internet of Things',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'KCS504',
        name: 'Distributed Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '7th':[
      {
        code: 'IT701',
        name: 'Software Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'IT702',
        name: 'Database Management Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'IT703',
        name: 'Computer Networks',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'IT704',
        name: 'Operating Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      
    ],
    '8th':[
      {
        code: 'IT801',
        name: 'Web Technologies',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'IT802',
        name: 'Artificial Intelligence',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'IT803',
        name: 'Cyber Security',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'IT804',
        name: 'Project Work',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      
    ]
  },
  Civil: {
    '1st': [
      {
        code: 'CIV101',
        name: 'Introduction to Civil Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV102',
        name: 'Engineering Mathematics-I',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV103',
        name: 'Engineering Physics',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV104',
        name: 'Basic Mechanical Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '2nd': [
      {
        code: 'CIV201',
        name: 'Surveying',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV202',
        name: 'Strength of Materials',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV203',
        name: 'Fluid Mechanics',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV204',
        name: 'Building Materials and Construction',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '3rd': [
      {
        code: 'CIV301',
        name: 'Structural Analysis',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV302',
        name: 'Geotechnical Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV303',
        name: 'Environmental Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV304',
        name: 'Transportation Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '4th': [
      {
        code: 'CIV401',
        name: 'Design of Concrete Structures',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV402',
        name: 'Design of Steel Structures',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV403',
        name: 'Water Resources Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV404',
        name: 'Construction Management',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '5th': [
      {
        code: 'CIV501',
        name: 'Advanced Structural Analysis',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV502',
        name: 'Pavement Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV503',
        name: 'Earthquake Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV504',
        name: 'Urban Planning',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '6th': [
      {
        code: 'CIV601',
        name: 'Advanced Geotechnical Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV602',
        name: 'Hydrology and Hydraulic Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV603',
        name: 'Advanced Construction Techniques',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV604',
        name: 'Project Management',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '7th':[
      {
        code: 'CIV701',
        name: 'Structural Analysis III',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV702',
        name: 'Design of Concrete Structures',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV703',
        name: 'Environmental Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV704',
        name: 'Geotechnical Engineering II',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    
    ],
    '8th':[
      {
        code: 'CIV801',
        name: 'Transportation Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV802',
        name: 'Water Resource Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV803',
        name: 'Construction Management',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'CIV804',
        name: 'Project Work',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      
    ]
  },
  Electrical: {
    '1st': [
      {
        code: 'ELE101',
        name: 'Basic Electrical Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE102',
        name: 'Engineering Mathematics-I',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE103',
        name: 'Engineering Physics',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE104',
        name: 'Engineering Chemistry',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '2nd': [
      {
        code: 'ELE201',
        name: 'Electrical Machines',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE202',
        name: 'Electromagnetic Fields',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE203',
        name: 'Analog Electronics',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE204',
        name: 'Digital Electronics',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '3rd': [
      {
        code: 'ELE301',
        name: 'Power Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE302',
        name: 'Control Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE303',
        name: 'Electrical Measurements',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE304',
        name: 'Power Electronics',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '4th': [
      {
        code: 'ELE401',
        name: 'Electrical Power Generation',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE402',
        name: 'Electrical Power Distribution',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE403',
        name: 'Electrical Drive Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE404',
        name: 'High Voltage Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '5th': [
      {
        code: 'ELE501',
        name: 'Power System Operation and Control',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE502',
        name: 'Renewable Energy Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE503',
        name: 'Electrical Machines Design',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE504',
        name: 'Power Quality',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '6th': [
      {
        code: 'ELE601',
        name: 'Advanced Power Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE602',
        name: 'Smart Grids',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE603',
        name: 'Electrical Energy Storage Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE604',
        name: 'Electrical Safety',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
    ],
    '7th':[
      {
        code: 'ELE701',
        name: 'Power System Protection',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE702',
        name: 'High Voltage Engineering',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE703',
        name: 'Renewable Energy Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE704',
        name: 'Electrical Drives',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      
    ],
    '8th':[
      {
        code: 'ELE801',
        name: 'Power System Analysis',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE802',
        name: 'Control Systems',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE803',
        name: 'Electrical Machine Design',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      {
        code: 'ELE804',
        name: 'Project Work',
        resources: [
          { type: 'Quantum Series', url: '#' },
          { type: 'Books', url: '#' },
          { type: 'Notes', url: '#' },
          { type: 'Video lectures', url: '#' },
        ],
      },
      
    ]

  },
};

export default subjects;
