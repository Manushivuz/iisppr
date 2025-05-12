import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const AboutSection = () => {
  return (
	<div className=" h-[92vh]">	
		<section className="text-center text-[20px]">
						 {/* About Section */}
<section className="relative bg-[#f4f6f3] h-[92vh] overflow-hidden">
  {/* Decorative background shape */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: "url('1.png')",height:'415px'} }
  >
    <div className="absolute inset-0  bg-opacity-20 z-10" />
  </div>

  {/* Content aligned near bottom */}
  <div className="relative z-20 container mx-auto px-4 h-full flex items-end pb-10">
    <div className="flex flex-col lg:flex-row items-center gap-60 w-full">
      {/* Image stack */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img
          src="/about us.png"
          alt="Tractor"
          className="w-96 h-96 object-cover rounded-xl shadow-lg z-10"
        />
        <img
          src="/image 1.png"
          alt="Farmer"
          className="w-72 h-72 object-cover rounded-xl absolute -bottom-10 left-28 z-20 border-4 border-white shadow-xl"
        />
      </div>

      {/* Text content */}
      <div className="w-full lg:w-1/2 text-white">
        <p className="text-sm text-green-600 mb-2 font-semibold uppercase tracking-wide">About Us</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4 text-gray-900">
          Small Acts of Kindness Can Change Lives
        </h2>
        <p className="text-gray-700 mb-6">
          We are a community of changemakers driven by empathy and action. Through food drives, shelter support,
          and education programs, we aim to restore dignity and provide opportunities for those in need.
        </p>
        <button className="bg-[#C3FF00D9] hover:bg-black hover:text-[#C3FF00D9] text-white font-semibold px-6 py-2 rounded-full inline-flex items-center transition">
          Learn More <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  </div>
</section>

		</section>
	</div>
  );
};

export default AboutSection; 