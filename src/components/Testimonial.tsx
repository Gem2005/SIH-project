import React from 'react';
import '../styles/Testimonial.css'; // Ensure the path is correct

const Testimonial: React.FC = () => {
  return (
    <section id="review" className="flex flex-col lg:flex-row">
      {/* Testimonial Section */}
      <div className="flex-1 p-8 lg:pr-4 bg-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-[#324158] text-5xl font-bold">What people Say!</h2>
          <h3 className="text-[#185282] text-3xl mt-4 font-bold">Is people loving our website with these features?</h3>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-carousel">
            {[{
              imgSrc: 'material/Arpan4.jpg',
              name: 'Parker',
              review: 'This is very useful website to connect with college seniors.',
              date: '08/11/2019'
            }, {
              imgSrc: 'material/Arpan.jpeg',
              name: 'Akki',
              review: 'I got internship with the help of CoLink.',
              date: '28/01/2022'
            }, {
              imgSrc: 'material/Arpan3.jpg',
              name: 'Samad',
              review: 'This is amazing website where I connected with seniors.',
              date: '08/09/2022'
            }, {
              imgSrc: 'material/Akhilesh.jpeg',
              name: 'Harry',
              review: 'This is very interactive and easy to use.',
              date: '28/05/2022'
            }, {
              imgSrc: 'material/vicky.jpeg',
              name: 'Sanky',
              review: 'Nyc work and idea on which CoLink is working.',
              date: '22/03/2022'
            }].map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-white p-4 rounded-lg shadow-lg hover:shadow-inner transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-avatar" />
                  <h4 className="ml-4 text-[#324158] text-sm font-bold">{testimonial.name}</h4>
                </div>
                <p className="text-[#324158] mb-2">{testimonial.review}</p>
                <p className="text-gray-600 text-xs">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Give Your Review Section */}
      <div className="flex-1 p-8 lg:pl-4 bg-gray-100">
        <div className="review-container">
          <h2 className="text-[#324158] text-4xl font-bold mb-4">GIVE YOUR REVIEW</h2>
          <textarea
            rows={10}
            cols={50}
            placeholder="How is your experience?..."
            className="review-textarea w-full border rounded-xl p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-[#4466cc]"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
