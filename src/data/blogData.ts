// data/blogData.ts

// Define the type for blog card props
export interface BlogCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  content: string; // Full content of the blog
  author?: string; // Author of the blog
  tags?: string[]; // Tags related to the blog
  comments?: { user: string; comment: string; date: string }[]; // Comments on the blog
}

// Define the type for the blog data
export interface BlogData {
  [key: string]: BlogCardProps[];
}

// Import images
import recp1 from '../assets/images/faculty.jpg';
import cloud from '../assets/images/cloud.jpeg';
import iot from '../assets/images/Iot.jpeg';
import blockchain from '../assets/images/blockchain.jpeg';
import robotics from '../assets/images/Robotics.jpeg';


// Example blog data
const blogData: BlogData = {
  latest: [
    {
      id: "1",
      title: "Alumni Engagement",
      date: "12TH June, 2024",
      description: "Alumni engagement is the process of building and maintaining meaningful relationships between educational institutions and their former students, also known as...",
      imageSrc: recp1,
      content: `
        Alumni engagement is the process of building and maintaining meaningful relationships between educational institutions and their former students, also known as alumni.

Universities need engaged alumni to help contribute to the institution’s reputation, fundraising potential, networking opportunities, and support for academic and strategic goals.
      `,
      author: "Gemini Sharma",
      tags: ["Education", "Engineering", "Chennai"],
      comments: [
        { user: "Md. Tahir", comment: "An insightful post about the college's legacy!", date: "14TH June, 2024" },
        { user: "Aarav Sharma", comment: "Glad to see such detailed information.", date: "15TH June, 2024" }
      ]
    },
    {
      id: "2",
      title: "Cloud Computing",
      date: "27TH Aug, 2024",
      description: "Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power...",
      imageSrc: cloud,
      content: `
        Cloud computing represents a significant shift from traditional computing models, where resources and services are provided over the internet. This approach allows for scalable and flexible access to computing resources, such as servers, storage, databases, and networking, on a pay-as-you-go basis.

        Major benefits of cloud computing include cost savings, enhanced collaboration, and increased efficiency. Organizations can avoid the capital expense of buying hardware and software and instead pay only for the resources they use. Additionally, cloud services offer the ability to scale up or down based on demand, providing greater flexibility.

        Key players in the cloud computing industry include Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). These providers offer a wide range of services, from infrastructure as a service (IaaS) to platform as a service (PaaS) and software as a service (SaaS).

        Cloud computing has also paved the way for innovations in areas like artificial intelligence, big data analytics, and the Internet of Things (IoT). It continues to drive advancements across various industries by providing scalable and efficient solutions for computing needs.
      `,
      author: "Ayush Yadav",
      tags: ["Technology", "Cloud Computing", "IT"],
      comments: [
        { user: "Gemini", comment: "Great overview of cloud computing benefits.", date: "30TH Aug, 2024" },
        { user: "Aarav", comment: "The content is very informative and up-to-date.", date: "1ST Sep, 2024" }
      ]
    },
    {
      id: "3",
      title: "Internet Of Things",
      date: "15TH Dec, 2004",
      description: "The Internet of Things (IoT) refers to a system of interrelated, internet-connected objects that are able to collect and transfer data...",
      imageSrc: iot,
      content: `
        The Internet of Things (IoT) is a transformative concept that connects everyday objects to the internet, allowing them to send and receive data. This connectivity enables objects to interact with each other and with centralized systems, creating a network of intelligent devices that can automate and optimize various processes.

        IoT applications span a wide range of industries, from smart homes with connected appliances to industrial IoT (IIoT) systems that monitor and manage machinery in real-time. IoT technology relies on sensors, communication protocols, and data analytics to provide actionable insights and improve efficiency.

        Key components of IoT systems include sensors and actuators, communication networks, and data processing platforms. IoT solutions often leverage cloud computing and machine learning to analyze data and make real-time decisions.

        The growth of IoT has been driven by advancements in wireless communication technologies, such as 5G, and the increasing availability of low-cost sensors. As IoT continues to evolve, it promises to revolutionize various sectors, including healthcare, transportation, and agriculture.
      `,
      author: "Santhoshi Pragathi",
      tags: ["Technology", "IoT", "Smart Devices"],
      comments: [
        { user: "Sarah M.", comment: "Very detailed explanation of IoT technology.", date: "16TH Dec, 2004" },
        { user: "David T.", comment: "Interesting read on IoT applications.", date: "17TH Dec, 2004" }
      ]
    },
    {
      id: "4",
      title: "Blockchain",
      date: "7TH July, 2021",
      description: "A system in which a record of transactions made in bitcoin or another cryptocurrency are maintained across several computers...",
      imageSrc: blockchain,
      content: `
        Blockchain technology is a decentralized digital ledger system that records transactions across multiple computers in a way that ensures the security and transparency of the data. Each transaction is grouped into a block, which is then linked to the previous block, forming a chain of blocks—hence the name "blockchain."

        The most well-known application of blockchain technology is in cryptocurrencies like Bitcoin and Ethereum. However, blockchain has applications beyond digital currencies, including supply chain management, voting systems, and identity verification.

        Key features of blockchain include immutability, transparency, and security. Once a block is added to the chain, it cannot be altered without changing all subsequent blocks, which makes it highly resistant to tampering.

        Blockchain technology has the potential to disrupt various industries by providing a secure and transparent method for recording and verifying transactions. As blockchain continues to evolve, it is expected to play a significant role in various sectors, including finance, healthcare, and logistics.
      `,
      author: "Amlan Sarkar",
      tags: ["Technology", "Blockchain", "Cryptocurrency"],
      comments: [
        { user: "Liam W.", comment: "Excellent overview of blockchain technology.", date: "8TH July, 2021" },
        { user: "Olivia S.", comment: "Informative and well-written article.", date: "9TH July, 2021" }
      ]
    },
    {
      id: "5",
      title: "Robotics",
      date: "23TH Oct, 2009",
      description: "The branch of technology that deals with the design, construction, operation, and application of robots...",
      imageSrc: robotics,
      content: `
        Robotics is an interdisciplinary field that combines mechanical engineering, electrical engineering, and computer science to design, build, and operate robots. Robots are programmable machines that can perform tasks autonomously or semi-autonomously, often in environments that are hazardous or difficult for humans.

        Robotics applications span various industries, including manufacturing, healthcare, and exploration. In manufacturing, robots are used for tasks such as welding, painting, and assembly. In healthcare, robots assist with surgeries and provide rehabilitation support.

        The field of robotics involves several key areas, including robot kinematics, control systems, and artificial intelligence. Advances in these areas have led to the development of more sophisticated robots with improved capabilities and flexibility.

        Robotics continues to advance rapidly, driven by innovations in sensor technology, machine learning, and materials science. As robots become more capable and affordable, they are expected to play an increasingly important role in various aspects of daily life and industry.
      `,
      author: "Md. Tahir Sheikh",
      tags: ["Technology", "Robotics", "Engineering"],
      comments: [
        { user: "Noah G.", comment: "Great article on robotics applications.", date: "24TH Oct, 2009" },
        { user: "Mia L.", comment: "Very informative and engaging.", date: "25TH Oct, 2009" }
      ]
    },
   
  ]
};

export default blogData;
