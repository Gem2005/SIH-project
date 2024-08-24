import React from 'react';
import FeaturesCard from '../components/FeaturesCard';
import BlogCard from '../components/BlogCard';
import Testimonial from '../components/Testimonial';
import TeamMember from '../components/TeamMember';
import ContactForm from '../components/ContactForm';
import BlogSection from '../components/BlogSection';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '@components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>    
     <FeaturesCard />
     <BlogSection/>         
     <TeamMember />      
     <ContactForm />
     <Footer/>
         
    </div>
  );
};

export default HomePage;
