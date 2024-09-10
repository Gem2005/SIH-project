import React from 'react';
import FeaturesCard from '../components/FeaturesCard';
import TeamMember from '../components/TeamMember';
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
     <Footer/>
         
    </div>
  );
};

export default HomePage;
