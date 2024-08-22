import React from 'react';

interface ChatHeaderProps {
  name: string;
  profileImage: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ name, profileImage }) => {
  return (
    <div className="chat-header">
      <img src={profileImage} alt={name} className="chat-header-image" />
      <h1 className="chat-header-name">{name}</h1>
      <div className="chat-header-icons">
        {/* Replace with actual icons or add appropriate components */}
        <span className="chat-header-icon">📞</span>
        <span className="chat-header-icon">🎥</span>
        <span className="chat-header-icon">👤</span>
      </div>
    </div>
  );
};

export default ChatHeader;
