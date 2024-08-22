// components/BlogCard.tsx

import React from 'react';
import { BlogCardProps } from '../data/blogData'; // Import blog card props

const BlogCard: React.FC<BlogCardProps> = ({ title, date, description, imageSrc }) => {
  return (
    <div className="shadow-2xl hover:shadow-[#008AFC] rounded-b-[50px] transition-shadow duration-300 ease-in-out">
      <img className="w-full rounded-t-[50px]" src={imageSrc} alt={title} />
      <div className="py-2 px-4 w-full flex justify-between bg-gradient-to-r from-[#008AFC] to-[#1C4483]">
        <p className="text-sm text-white font-semibold">{title}</p>
        <p className="text-sm text-white font-semibold">{date}</p>
      </div>
      <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
        <h1 className="text-lg text-gray-900 font-semibold">{title}</h1>
        <p className="text-gray-700 dark:text-gray-500 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
