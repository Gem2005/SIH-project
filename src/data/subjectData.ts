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
  ECM: {
    '1st': [
      {
        code: 'BEEE101L',
        name: 'Basic Electrical and Electronics',
        resources: [
      
          { type: 'Books', url: 'https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/_Charles%20Alexander%2C%20Matthew%20Sadiku-Fundamentals%20of%20Electric%20Circuits-McGraw-Hill%20Science_Engineering_Math%20%282012%29.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1qAig7bUHDHhgzE2NctTO3GcCT9JOSQeu' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=icrAf1us2IQ&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy' },
        ],
      },
      {
        code: 'BMAT101L',
        name: 'Calculus',
        resources: [
          
          { type: 'Books', url: 'https://drive.google.com/drive/folders/1AtmhWkL3ceJmPBtYZ9v4GOEqtCHqJ0fw' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1BlWwX07_IYJOr_9IlONZnn8EmcsBGH3k' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=WX6O9TiFYsA&list=PLU6SqdYcYsfIJRl8mo2Rv1MpdvmVD0YyI' },
        ],
      },
      {
        code: 'BPHY101L',
        name: 'Engineering Physics',
        resources: [
          
          { type: 'Books', url: 'https://www.studocu.com/in/document/vellore-institute-of-technology/engineering-physics/anuradha-physics-221208-003259/79075395' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/148CVLjG6KJAUyCaUNh_IWcNqRBM6ZCt7' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=2Eqe7jPv-Bw&list=PLTYLC3XcJGZ5D3ohTYfOIR39L-H69f9Ca' },
        ],
      },
      {
        code: 'BSTS101P',
        name: 'Soft Skills',
        resources: [
          
          { type: 'Books', url: 'https://360digitmg.com/blog/aptitude-interview-questions-and-answers' },
          { type: 'Notes', url: 'https://www.ambitionbox.com/topics/aptitude/questions-and-answers' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=tnc9ojITRg4&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt' },
        ],
      },
    ],
    '2nd': [
      {
        code: 'CHY102P',
        name: 'Chemistry',
        resources: [
          { type: 'Books', url: 'https://www.nietanugul.edu.in/files/2nd%20Sem_Engg%20Chem.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1zQRWlmKTv-30Nq8ZyhUHM2agbxyDO_mn' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=3O6OfCaVadI&list=PLm_MSClsnwm9p_yaZ8zIW1LxkK7_n98gD' },
        ],
      },
      {
        code: 'ECE102L',
        name: 'Digital Systems and Designs',
        resources: [
          
          { type: 'Books', url: 'https://docs.google.com/file/d/0B8-drkZsESDnN2NmYTQxYjQtYTMwZi00N2IzLTkxNjgtZjI1NTZiN2FjNDli/edit?resourcekey=0-Yk8bAsCt9I5epBNFTG8KMQ' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1dDa51V9CaN4PK8t78VBnW_IggcXM81tM' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=M0mx8S05v60&list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm' },
        ],
      },
      {
        code: 'MAT102L',
        name: 'Differential Equations',
        resources: [
          
          { type: 'Books', url: 'https://www.hzu.edu.in/engineering/Higher%20Engineering%20Mathematics.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/10v1MVAcrpkEM_Q94mBpvllOE94oxeFm_' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=JtReno5_GkI&list=PLVCBPCYGv7bB7ZxAx2rT0Ln2G6ad4ME-1' },
        ],
      },
      {
        code: 'BSTS102L',
        name: 'Soff Skills',
        resources: [
         
          { type: 'Books', url: 'https://360digitmg.com/blog/aptitude-interview-questions-and-answers' },
          { type: 'Notes', url: 'https://www.ambitionbox.com/topics/aptitude/questions-and-answers' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=tnc9ojITRg4&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt' },
        ],
      },
    ],
    '3rd': [
      {
        code: 'BCSE205L',
        name: 'Computer Architecture',
        resources: [
          { type: 'Books', url: 'https://www.mbit.edu.in/wp-content/uploads/2020/05/computer-systems-Architecture.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1of-FJqmp1tcu8cNwS_jrLfWVfT7ROPJv' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=v4O2cj3Oe0A&list=PLrjkTql3jnm8AcFgkc5TE_yQgeHEuKYrG' },
        ],
      },
      {
        code: 'BSTS201P',
        name: 'Soft Skills',
        resources: [
          
          { type: 'Books', url: 'https://360digitmg.com/blog/aptitude-interview-questions-and-answers' },
          { type: 'Notes', url: 'https://www.ambitionbox.com/topics/aptitude/questions-and-answers' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=tnc9ojITRg4&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt' },
        ],
      },
      {
        code: 'BCSE201P',
        name: 'Data Structures and Algorithms',
        resources: [
          
          { type: 'Books', url: 'https://www.mta.ca/~rrosebru/oldcourse/263114/Dsa.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1-RPc6u8dWNTT61gQzalJRmNJwAGeaOY1' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU' },
        ],
      },
      {
        code: 'BMAT205L',
        name: 'Discrete Maths',
        resources: [
        
          { type: 'Books', url: 'https://discrete.openmathbooks.org/pdfs/dmoi-tablet.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/16niVui1AkVZatwXwzy3PTNlWI4c_xa3m' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=p2b2Vb-cYCs&list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3' },
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
  CSE: {
    '1st': [
      {
        code: 'BEEE101L',
        name: 'Basic Electronics and Electrical',
        resources: [
          { type: 'Books', url: 'https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/_Charles%20Alexander%2C%20Matthew%20Sadiku-Fundamentals%20of%20Electric%20Circuits-McGraw-Hill%20Science_Engineering_Math%20%282012%29.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1qAig7bUHDHhgzE2NctTO3GcCT9JOSQeu' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=icrAf1us2IQ&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy' },
        ],
      },
      {
        code: 'MAT101L',
        name: 'Calculus',
        resources: [
          { type: 'Books', url: 'https://drive.google.com/drive/folders/1AtmhWkL3ceJmPBtYZ9v4GOEqtCHqJ0fw' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1BlWwX07_IYJOr_9IlONZnn8EmcsBGH3k' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=WX6O9TiFYsA&list=PLU6SqdYcYsfIJRl8mo2Rv1MpdvmVD0YyI' },
        ],
      },
      {
        code: 'PHY101L',
        name: 'Physics',
        resources: [
          { type: 'Books', url: 'https://www.studocu.com/in/document/vellore-institute-of-technology/engineering-physics/anuradha-physics-221208-003259/79075395' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/148CVLjG6KJAUyCaUNh_IWcNqRBM6ZCt7' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=2Eqe7jPv-Bw&list=PLTYLC3XcJGZ5D3ohTYfOIR39L-H69f9Ca' },
        ],
      },
      {
        code: 'BSTS101L',
        name: 'Soft Skills',
        resources: [
          { type: 'Books', url: 'https://360digitmg.com/blog/aptitude-interview-questions-and-answers' },
          { type: 'Notes', url: 'https://www.ambitionbox.com/topics/aptitude/questions-and-answers' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=tnc9ojITRg4&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt' },
        ],
      },
    ],
    '2nd': [
      {
        code: 'MAT102L',
        name: 'Differential Equations',
        resources: [
          { type: 'Books', url: 'https://www.hzu.edu.in/engineering/Higher%20Engineering%20Mathematics.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/10v1MVAcrpkEM_Q94mBpvllOE94oxeFm_' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=JtReno5_GkI&list=PLVCBPCYGv7bB7ZxAx2rT0Ln2G6ad4ME-1' },
        ],
      },
      {
        code: 'CHY102L',
        name: 'Chemistry',
        resources: [
          { type: 'Books', url: 'https://www.nietanugul.edu.in/files/2nd%20Sem_Engg%20Chem.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1zQRWlmKTv-30Nq8ZyhUHM2agbxyDO_mn' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=3O6OfCaVadI&list=PLm_MSClsnwm9p_yaZ8zIW1LxkK7_n98gD' },
        ],
      },
      {
        code: 'BSTS102L',
        name: 'Soft Skills',
        resources: [
          { type: 'Books', url: 'https://360digitmg.com/blog/aptitude-interview-questions-and-answers' },
          { type: 'Notes', url: 'https://www.ambitionbox.com/topics/aptitude/questions-and-answers' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=tnc9ojITRg4&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt' },
        ],
      },
      {
        code: 'ECE102L',
        name: 'Digital Systems and Design',
        resources: [
          { type: 'Books', url: 'https://docs.google.com/file/d/0B8-drkZsESDnN2NmYTQxYjQtYTMwZi00N2IzLTkxNjgtZjI1NTZiN2FjNDli/edit?resourcekey=0-Yk8bAsCt9I5epBNFTG8KMQ' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1dDa51V9CaN4PK8t78VBnW_IggcXM81tM' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=M0mx8S05v60&list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm' },
        ],
      },
    ],
    '3rd': [
      {
        code: 'CSE201L',
        name: 'Data Structures ',
        resources: [
          
          { type: 'Books', url: 'https://www.mta.ca/~rrosebru/oldcourse/263114/Dsa.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1-RPc6u8dWNTT61gQzalJRmNJwAGeaOY1' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU' },
        ],
      },
      {
        code: 'BSTS201L',
        name: 'Soft Skills',
        resources: [
          { type: 'Books', url: 'https://360digitmg.com/blog/aptitude-interview-questions-and-answers' },
          { type: 'Notes', url: 'https://www.ambitionbox.com/topics/aptitude/questions-and-answers' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=tnc9ojITRg4&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt' },
        ],
      },
      {
        code: 'MAT201L',
        name: 'Probability',
        resources: [
    
          { type: 'Books', url: 'http://ndl.ethernet.edu.et/bitstream/123456789/33524/1/Richard%20A.%20Johnson_2018.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1V-3o0UlH8YFy2-yiW-twCcYqzrmzc-WG' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=Q_u3Lt5AV3c&list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V' },
        ],
      },
      {
        code: 'ECE201L',
        name: 'MPMC',
        resources: [
          
          { type: 'Books', url: 'https://drive.google.com/drive/folders/180ZQqSGViIRyBpRyyGccCj7GRUxPRWi0' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1m4QZETW2ZVrDKit3P3w8uSPN5ss78-4M' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=jte2S2iWRMI&list=PLBlnK6fEyqRgyFCCgqdcBowmSp_BTKs4F' },
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
  ECE: {
    '1st': [
      {
        code: 'BEEE101L',
        name: 'Basic Electronics and Electrical',
        resources: [
          { type: 'Books', url: 'https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/_Charles%20Alexander%2C%20Matthew%20Sadiku-Fundamentals%20of%20Electric%20Circuits-McGraw-Hill%20Science_Engineering_Math%20%282012%29.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1qAig7bUHDHhgzE2NctTO3GcCT9JOSQeu' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=icrAf1us2IQ&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy' },
        ],
      },
      {
        code: 'MAT101L',
        name: 'Calculus',
        resources: [
          { type: 'Books', url: 'https://drive.google.com/drive/folders/1AtmhWkL3ceJmPBtYZ9v4GOEqtCHqJ0fw' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1BlWwX07_IYJOr_9IlONZnn8EmcsBGH3k' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=WX6O9TiFYsA&list=PLU6SqdYcYsfIJRl8mo2Rv1MpdvmVD0YyI' },
        ],
      },
      {
        code: 'PHY101L',
        name: 'Engineering Physics',
        resources: [
          { type: 'Books', url: 'https://www.studocu.com/in/document/vellore-institute-of-technology/engineering-physics/anuradha-physics-221208-003259/79075395' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/148CVLjG6KJAUyCaUNh_IWcNqRBM6ZCt7' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=2Eqe7jPv-Bw&list=PLTYLC3XcJGZ5D3ohTYfOIR39L-H69f9Ca' },
        ],
      },
      {
        code: 'STS102L',
        name: 'Soft Skills',
        resources: [
          { type: 'Books', url: 'https://360digitmg.com/blog/aptitude-interview-questions-and-answers' },
          { type: 'Notes', url: 'https://www.ambitionbox.com/topics/aptitude/questions-and-answers' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=tnc9ojITRg4&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt' },
        ],
      },
    ],
    '2nd': [
      {
        code: 'MAT102L',
        name: 'Differential Equations',
        resources: [
          { type: 'Books', url: 'https://www.hzu.edu.in/engineering/Higher%20Engineering%20Mathematics.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/10v1MVAcrpkEM_Q94mBpvllOE94oxeFm_' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=JtReno5_GkI&list=PLVCBPCYGv7bB7ZxAx2rT0Ln2G6ad4ME-1' },
        ],
      },
      {
        code: 'CHY102L',
        name: 'Chemistry',
        resources: [
          { type: 'Books', url: 'https://www.nietanugul.edu.in/files/2nd%20Sem_Engg%20Chem.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1zQRWlmKTv-30Nq8ZyhUHM2agbxyDO_mn' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=3O6OfCaVadI&list=PLm_MSClsnwm9p_yaZ8zIW1LxkK7_n98gD' },
        ],
      },
      {
        code: 'BSTS102L',
        name: 'Soft Skills',
        resources: [
          { type: 'Books', url: 'https://360digitmg.com/blog/aptitude-interview-questions-and-answers' },
          { type: 'Notes', url: 'https://www.ambitionbox.com/topics/aptitude/questions-and-answers' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=tnc9ojITRg4&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt' },
        ],
      },
      {
        code: 'ECE102L',
        name: 'Electromagnetics',
        resources: [
          
          { type: 'Books', url: 'http://www.uop.edu.pk/ocontents/EMT.pdf' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1DVQNBGuqIm2i2PFhyEeJPqKCqIw4r3Pl' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=dRqggyp5zxo&list=PLm_MSClsnwm-w_oyXiPFYgtn-oreRmN9Q' },
        ],
      },
    ],
    '3rd': [
      {
        code: 'BECE206L',
        name: 'Analog ',
        resources: [
         
          { type: 'Books', url: 'https://drive.google.com/drive/folders/1BJ8ck2Evamw0Eaadp8VXQ2HzQBHPtdZr' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/14Ot0sHfZ67L_A_WEElh8CZJusKaMaPqu' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=b8-Q9ypooHA&list=PLgwJf8NK-2e5u1DJ5jfTcj6m1GX-cEdm8' },
        ],
      },
      {
        code: 'MAT201L',
        name: 'Complex Variables',
        resources: [
          
          { type: 'Books', url: 'https://drive.google.com/drive/folders/1VUGRcUziINY-X_OzHO5f-jtaM2-p-964' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/15SQ4sZpCnMMQLdIzNF_fApDfANIwkzTw' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=fmOlwPtaDek&list=PLhSp9OSVmeyITvYvCWwrYBiPkzsCNSOWu' },
        ],
      },
      {
        code: 'ECE102L',
        name: 'Digital Systems and Designs',
        resources: [
          { type: 'Books', url: 'https://docs.google.com/file/d/0B8-drkZsESDnN2NmYTQxYjQtYTMwZi00N2IzLTkxNjgtZjI1NTZiN2FjNDli/edit?resourcekey=0-Yk8bAsCt9I5epBNFTG8KMQ' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1dDa51V9CaN4PK8t78VBnW_IggcXM81tM' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=M0mx8S05v60&list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm' },
        ],
      },
      {
        code: 'ECE201L',
        name: 'Signals and Systems',
        resources: [
          
          { type: 'Books', url: 'https://drive.google.com/drive/folders/1FXwQqR-k7UNUpxXzB__W3wufu5E-xACs' },
          { type: 'Notes', url: 'https://drive.google.com/drive/folders/1AYfcqRmtc0hfyWcvpDyzvWQoVKxTjGZ6' },
          { type: 'Video lectures', url: 'https://www.youtube.com/watch?v=s8rsR_TStaA&list=PLBlnK6fEyqRhG6s3jYIU48CqsT5cyiDTO' },
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
