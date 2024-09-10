// components/BlogSection.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import blogData, { BlogCardProps } from '../data/blogData'; // Import blog data
import Navbar from './Navbar';
import Footer from './Footer'
// import { colors } from '@mui/material';

const BlogSection: React.FC = () => {
  return (
    <>
    <Navbar/>
    <section id="blogs" style={{ paddingTop: '7.5rem' }} className=" py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-[#cdd6eb]" >
      {/* Section Header */}
      <div className="flex justify-center mb-12">
        <a className="text-[#324158] text-3xl lg:text-5xl font-bold">Blogs</a>
      </div>

      {/* Blog Posts */}
      <div id='blogs' className="mx-auto container">
        
        <div className="mt-8 lg:mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {blogData.latest.map((blog: BlogCardProps) => (
            <div
              key={blog.id}
              className="bg-[#e0e5ec] rounded-lg p-4 transition-shadow duration-300 ease-in-out hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]"
            >
              <img src={blog.imageSrc} alt={blog.title} className="w-full h-32 object-cover rounded-lg" />
              <div className="py-2 px-4 flex justify-between bg-[#e0e5ec] border-b border-[#c1c8d1] rounded-t-lg mt-2">
                <p className="text-sm text-[#4a4a4a] font-semibold">{blog.title}</p>
                <p className="text-sm text-[#4a4a4a] font-semibold">{blog.date}</p>
              </div>
              <div className="px-4 py-2 rounded-b-lg mt-2">
                <h2 className="text-sm text-[#333333] font-semibold">{blog.title}</h2>
                <p className="text-[#4a4a4a] text-xs lg:text-sm lg:leading-6 mt-2">{blog.description}</p>
                <div className="flex justify-end mt-2">
                  <Link to={`/blogs/${blog.id}`} className="text-white bg-gradient-to-r from-[#008AFC] via-blue-500 to-[#1C4483] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#008AFC] shadow-lg hover:shadow-[#0056b3] font-medium rounded-lg text-xs px-3 py-1.5 text-center">Read More..</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default BlogSection;
