interface Message {
    id: string;
    sender: string;
    text: string;
    timestamp: Date;
  }
  
  interface MockMessages {
    [key: string]: Message[];
  }
  
  export const mockMessages: MockMessages = {
    "123": [
      { id: "1", sender: "currentUser", text: "Hello!", timestamp: new Date() },
      { id: "2", sender: "John Doe", text: "Hi there!", timestamp: new Date() },
    ],
    "456": [
      { id: "1", sender: "currentUser", text: "How are you?", timestamp: new Date() },
      { id: "2", sender: "Jane Doe", text: "I'm good, thanks!", timestamp: new Date() },
    ],
    // Add more mock messages for other users
  };
  
  export const mockChats = [
    { id: '123', name: 'John Doe', avatar: 'avatar.jpg', lastMessage: 'Hi there!', isOnline: true },
    { id: '456', name: 'Jane Doe', avatar: 'avatar.jpg', lastMessage: 'I\'m good, thanks!', isOnline: false },
    // Add more mock chat data
  ];
  