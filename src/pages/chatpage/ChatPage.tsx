// src/pages/chatpage/ChatPage.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { studentProfiles } from '@data/studentProfilesData';
import ChatHeader from '@components/chat/ChatHeader';
import ChatSidebar from '@components/chat/ChatSidebar';
import ChatRoom from '@components/chat/ChatRoom';
import MessageInput from '@components/chat/MessageInput';
import "@styles/chat/ChatPage.css";

const ChatPage: React.FC = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const numericStudentId = parseInt(studentId || '', 10);
  const profile = studentProfiles.find(profile => profile.id === numericStudentId);

  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="chat-page">
      {/* Toggle Button */}
      <button
        className={`toggle-sidebar ${isSidebarOpen ? 'open' : ''}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <div className="chat-container">
        <ChatSidebar profiles={studentProfiles} isOpen={isSidebarOpen} />
        <div className={`chat-content ${isSidebarOpen ? 'with-sidebar-open' : 'without-sidebar-open'}`}>
          <ChatHeader name={profile.name} profileImage={profile.profileImage} />
          <ChatRoom />
          <MessageInput/>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
