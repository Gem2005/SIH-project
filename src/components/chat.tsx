// Chat.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { firestore, auth } from '../firebaseConfig';
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';

interface Message {
  text: string;
  sender: string;
  timestamp: firebase.firestore.Timestamp;
}

const Chat: React.FC<{ studentId: string; onClose: () => void }> = ({ studentId, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messagesRef = firestore.collection('chats').doc(studentId).collection('messages');
    const unsubscribe = messagesRef.orderBy('timestamp').onSnapshot(snapshot => {
      const msgs = snapshot.docs.map(doc => doc.data() as Message);
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [studentId]);

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();

    if (newMessage.trim()) {
      const user = auth.currentUser;
      if (user) {
        const messagesRef = firestore.collection('chats').doc(studentId).collection('messages');
        try {
          await messagesRef.add({
            text: newMessage,
            sender: user.uid,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
          setNewMessage('');
        } catch (error) {
          console.error("Error sending message: ", error);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 lg:mx-auto">
        <button
          className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col h-full">
          <div className="flex-grow overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 ${msg.sender === auth.currentUser?.uid ? 'text-right' : 'text-left'}`}>
                <p className="p-2 bg-gray-200 rounded-lg">{msg.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="flex mt-2">
            <input
              type="text"
              value={newMessage}
              onChange={handleMessageChange}
              className="flex-grow p-2 border rounded-l-lg"
              placeholder="Type a message"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
