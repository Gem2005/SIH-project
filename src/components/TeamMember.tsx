import React, { useState } from "react";
import "../styles/TeamMember.css";
import  ArpanImg  from "../assets/images/arpan7.jpg"; // Make sure the CSS file is correctly linked
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
          <h2><b>Highlights</b></h2>
          <div>
          
          <p> <b>Machine Learning Engineer</b></p>
          <p> <b>Full Stack Web Developer</b></p>
          </div>          
          <h2><b>About</b></h2>
          <p> Pursuing  <b>B.Tech </b> in <b>Information Technology</b> from <b><i>Rajkiya Engineering College Bijnor.</i></b>

            <br />  As a <b>Front-End Web Developer</b>, I live for those <b>"aha!"</b> moments when a design comes to life! Crafting sleek, stylish, and <b>user-friendly interfaces</b> .
           But <b><i>that’s not all!</i></b> I'm currently diving into the magical realm of <b>Machine Learning </b>.
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
          name="Arpan Saini"
          role="Web Designer and Developer"
          imgSrc={ArpanImg}
          linkedin="https://www.linkedin.com/in/arpansaini/"
          instagram="https://www.instagram.com/arpan_kumar_saini/"
          youtube="https://www.youtube.com/c/ArpanSaini"
          highlights="Alpha: 7347892, Beta: gbyewwerhui, Delta: TFGJHBGGiu, Theta: ftrft7bungjin"
          about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, laudantium ea placeat sapiente maxime, voluptatem maiores nisi ipsa libero totam nostrum ut natus quibusdam odio reiciendis possimus, repellat atque perspiciatis."
        />
        
        {/* Add more <TeamMember /> instances as needed */}
      </div>
    </section>
  );
};

export default TeamMembers;
