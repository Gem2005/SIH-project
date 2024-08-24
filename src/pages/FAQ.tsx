import React, { useState } from 'react';
import "../styles/FAQ.css";  // Ensure you create the FAQ.css file with the styles provided below
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is AlumMate?",
      answer: "AlumMate is an online platform that connects college students with alumni from their institution. It allows students to seek guidance, mentorship, and career advice, while alumni can give back to their community by sharing their experiences and insights.",
    },
    {
      question: "How do I sign up for AlumMate?",
      answer: 'You can sign up for AlumMate by visiting our website and clicking the "Sign Up" button. You will need to provide your email address, create a password, and fill in your profile details, such as your name, college, and graduation year.',
    },
    {
      question: "Who can join AlumMate?",
      answer: "AlumMate is open to both current students and alumni of participating colleges. Students can join to connect with alumni for mentorship and career advice, while alumni can join to share their experiences and guide current students.",
    },
    {
      question: "Is there a fee to use AlumMate?",
      answer: "No, AlumMate is completely free to use for both students and alumni. We are committed to fostering connections and providing valuable resources to our community at no cost.",
    },
    {
      question: "What can I ask an alum during a conversation?",
      answer: "You can ask alumni about their career paths, experiences in college, advice on job hunting, industry insights, networking tips, or any other topic related to professional or personal development.",
    },
    // Add more FAQs as needed...
  ];

  const toggleAnswer = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <>
   <Navbar/>
    <div className="faq-container mt-20">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list mt-14">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <button className="toggle-button">
                {visibleIndex === index ? '-' : '+'}
              </button>
            </div>
            {visibleIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FAQ;
