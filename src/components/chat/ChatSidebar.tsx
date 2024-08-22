import React from 'react';
import { StudentProfile } from '@data/studentProfilesData';

interface ChatSidebarProps {
  profiles: StudentProfile[];
  isOpen: boolean;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ profiles, isOpen }) => {
  return (
    <div className={`chat-sidebar ${isOpen ? 'open' : 'closed'}`}>
      {profiles.map(profile => (
        <div key={profile.id} className="profile-card">
          <img src={profile.profileImage} alt={profile.name} className="profile-image" />
          <div className="profile-info">
            <h3>{profile.name}</h3>
            <p>{profile.jobTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSidebar;
