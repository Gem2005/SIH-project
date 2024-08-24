// components/BlogPage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const blog = blogData.latest.find(blog => blog.id === id);

  if (!blog) {
    return <p className="text-center text-red-500">Blog not found!</p>;
  }

  return (
    <>
      <Navbar />
      <div className="py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-[#e0e5ec] min-h-screen">
        <div className="blog-container mx-auto">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#333333] mb-4">{blog.title}</h1>
          <p className="text-sm text-[#4a4a4a] mb-4">{blog.date}</p>
          <img src={blog.imageSrc} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-4 shadow-neumorphism" />
          <div className=" shadow-neumorphism rounded-lg p-6 mb-6">
            <p className="text-[#4a4a4a] text-sm lg:text-base lg:leading-6">{blog.content}</p>
          </div>
          <div className=" shadow-neumorphism rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-[#333333] mb-4">Author: {blog.author}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map(tag => (
                <span key={tag} className="bg-[#e0e5ec] text-[#4a4a4a] text-xs font-medium py-1 px-3 rounded-lg shadow-neumorphism">{tag}</span>
              ))}
            </div>
          </div>
          <div className=" shadow-neumorphism rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-[#333333] mb-4">Comments</h2>
            {blog.comments.map((comment, index) => (
              <div key={index} className="border-t border-[#c1c8d1] pt-4 last:border-none">
                <p className="text-sm font-medium text-[#333333]">{comment.user}</p>
                <p className="text-xs text-[#4a4a4a]">{comment.comment}</p>
                <p className="text-xs text-[#4a4a4a] italic">{comment.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
