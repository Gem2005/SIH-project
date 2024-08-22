// data/blogData.ts

// Define the type for blog card props
export interface BlogCardProps {
    title: string;
    date: string;
    description: string;
    imageSrc: string;
  }
  
  // Define the type for the blog data
  export interface BlogData {
    [key: string]: BlogCardProps[];
  }
  
  // Import images
  import recp1 from '../assets/images/recp1.jpg';
  import cloud from '../assets/images/cloud.jpeg';
  import iot from '../assets/images/Iot.jpeg';
  import blockchain from '../assets/images/blockchain.jpeg';
  import robotics from '../assets/images/Robotics.jpeg';
  
  // Example blog data
  const blogData: BlogData = {
    latest: [
      {
        title: "RAJKIYA ENGINEERING COLLEGE BIJNOR",
        date: "12TH June, 2003",
        description: "Rajkiya Engineering College Bijnor (Formerly Dr. Bhim Rao Ambedkar Engineering College of Information Technology, Bijnor) was started by Government of Uttar Pradesh, Department of Technical Education under Special Component Plan (SCP)...",
        imageSrc: recp1
      },
      {
        title: "Cloud Computing",
        date: "27TH Oct, 2022",
        description: "Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the use...",
        imageSrc: cloud
      },
      {
        title: "IoT",
        date: "15TH Dec, 2004",
        description: "The Internet of Things (IoT) refers to a system of interrelated, internet-connected objects that are able to collect and transfer data over a wireless network without human intervention....",
        imageSrc: iot
      },
      {
        title: "Blockchain",
        date: "7TH July, 2021",
        description: "A system in which a record of transactions made in bitcoin or another cryptocurrency are maintained across several computers that are linked in a peer-to-peer network....",
        imageSrc: blockchain
      },
      {
        title: "Robotics",
        date: "23TH Oct, 2009",
        description: "The branch of technology that deals with the design, construction, operation, and application of robots. 'Civilian research on robotics is advancing swiftly'...",
        imageSrc: robotics
      }
    ]
  };
  
  export default blogData;
  