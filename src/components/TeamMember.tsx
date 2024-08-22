import React, { useState } from "react";
import "../styles/TeamMember.css"; // Make sure the CSS file is correctly linked

interface TeamMemberProps {
  name: string;
  role: string;
  imgSrc: string;
  linkedin: string;
  instagram?: string;
  twitter?: string;
  facebook?: string;
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
  twitter,
  facebook,
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
            <img src="src/assets/images/linkdin.jpg" alt="LinkedIn" />
          </a>}
          {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/instagram.jpg" alt="Instagram" />
          </a>}
          {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/twitter.jpg" alt="Twitter" />
          </a>}
          {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/facebook.jpg" alt="Facebook" />
          </a>}
          {youtube && <a href={youtube} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/youtube.jpg" alt="YouTube" />
          </a>}
        </div>
        <div className="team-card-content">
          <h2>Highlights</h2>
          <p>{highlights}</p>
          <h2>About</h2>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

const TeamMembers: React.FC = () => {
  return (
    <section className="team-section">
      <h1 className="team-section-title">Our Team</h1>
      <div className="team-grid">
        <TeamMember
          name="Arpan Saini"
          role="Web Designer and Developer"
          imgSrc="src/assets/images/arpan7.jpg"
          linkedin="https://www.linkedin.com/in/arpansaini/"
          instagram="https://www.instagram.com/arpan_kumar_saini/"
          twitter="https://twitter.com/arpan_saini"
          facebook="https://www.facebook.com/arpan.saini.547"
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
