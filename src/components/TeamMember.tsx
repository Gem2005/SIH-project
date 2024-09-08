import React, { useState } from "react";
import "../styles/TeamMember.css";
import  ArpanImg  from "../assets/images/image1.jpg"; // Make sure the CSS file is correctly linked
import  LinkedinImg  from "../assets/images/linkdin.jpg"; // Make sure the CSS file is correctly linked
import  InstaImg  from "../assets/images/instagram.jpg"; // Make sure the CSS file is correctly linked
import  YoutubeImg  from "../assets/images/youtube.jpg"; // Make sure the CSS file is correctly linked

interface TeamMemberProps {
  name: string;
  role: string;
  imgSrc: string;
  linkedin: string;
  instagram?: string;
  
  youtube?: string;
  highlights: string;
  about: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imgSrc,
  linkedin,
  instagram,
 
  youtube,
  highlights,
  about
}) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="team-card">
      <div className="team-card-header">
        <img src={imgSrc} alt={name} className="team-card-img" />
        <div className="team-card-info">
          <h1 className="team-card-name">{name}</h1>
          <p className="team-card-role">{role}</p>
        </div>
        <button
          className="team-card-toggle"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "View Less" : "View Full"}
        </button>
      </div>
      <div className={`team-card-details ${showFull ? "show" : "hide"}`}>
        <div className="team-card-social">
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img src={LinkedinImg} alt="LinkedIn" />
          </a>}
          {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer">
            <img src={InstaImg} alt="Instagram" />
          </a>}
          
          {youtube && <a href={youtube} target="_blank" rel="noopener noreferrer">
            <img src={YoutubeImg} alt="YouTube" />
          </a>}
        </div>
        <div className="team-card-content">
          <h2><b>Team Members</b></h2>
          <div>
          
          <p> <b>Ayush Yadav - 23BLC1193</b></p>
          <p> <b>Gemini Sharma-23BLC1010</b></p>
          <p> <b>Md. Tahir Shaikh-23BAI1277</b></p>
          <p> <b>Aarav Sharma-23BLC1300</b></p>
          <p> <b>Amlan Sarkar-23BAI1247</b></p>
          <p> <b>Santhoshi Pragathi-23BLC1006</b></p>
          </div>          
          <h2><b>Highlights</b></h2>
          <p>
            <br />Building a platform to bridge alumni and students, fostering professional networking and mentorship opportunities. Empowering students with career guidance while enabling alumni to give back to their alma mater.
          </p>
        </div>
      </div>
    </div>
  );
};

const TeamMembers: React.FC = () => {
  return (
    <section className="team-section">
      <h1 className="team-section-title">Developed By</h1>
      <div className="team-grid">
        <TeamMember
          name="VIT408"
          role="Web Designer and Developer"
          imgSrc={ArpanImg}
          linkedin="https://www.linkedin.com/"
          instagram="https://www.instagram.com/"
          youtube="https://www.youtube.com/"
          highlights="Alpha: 7347892, Beta: gbyewwerhui, Delta: TFGJHBGGiu, Theta: ftrft7bungjin"
          about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, laudantium ea placeat sapiente maxime, voluptatem maiores nisi ipsa libero totam nostrum ut natus quibusdam odio reiciendis possimus, repellat atque perspiciatis."
        />
        
        {/* Add more <TeamMember /> instances as needed */}
      </div>
    </section>
  );
};

export default TeamMembers;
