import React from 'react';
import FeaturesCard from '../components/FeaturesCard';
import BlogCard from '../components/BlogCard';
import Testimonial from '../components/Testimonial';
import TeamMember from '../components/TeamMember';
import ContactForm from '../components/ContactForm';
import BlogSection from '../components/BlogSection';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>

    
     <FeaturesCard />
     <BlogSection/>    
     
     <TeamMember />
    

            
       

     
      

      {/* Contact Us Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
