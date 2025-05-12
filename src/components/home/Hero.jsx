import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="border-2  h-[82vh]">
      <section className="text-center text-[20px]">
        <main className="relative z-20 flex-grow flex items-end w-full min-h-[82vh] bg-[url('/background.png')] bg-cover bg-center">
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0  z-10"></div>

          <section className="relative z-20 w-full flex flex-col md:flex-row px-6 py-10 gap-20">
            {/* Hero Section (Left) */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <button className="mb-4 px-4 py-2 border border-white rounded-full text-sm text-white hover:bg-white hover:text-black">
                Give Hope For Homeless
              </button>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
                Helping Each Other,
                <br />
                One Step At A Time
              </h1>
              <p className="mb-6 text-sm md:text-lg max-w-xl text-white">
                Together, we can bring warmth, shelter, and purpose to the lives
                of the homeless. Join us in making every step count toward a
                better, more compassionate world.
              </p>
              <button className="bg-[#C3FF00D9] text-white font-semibold px-6 py-2 rounded-full hover:bg-black hover:text-[#C3FF00D9] transition text-sm md:text-base">
                Read more →
              </button>
            </div>

            {/* Our Mission Section (Right) */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 text-white shadow-lg">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Our Mission
                </h2>
                <p className="text-xs md:text-sm leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  elementum sem quis eros posuere. Vitae tempor tellus porta.
                  Sed ultricies libero quis sem porttitor lacinia. Nunc at
                  ultricies ex.
                </p>
                <a
                  href="#"
                  className="text-white underline hover:text-[#C3FF00D9] text-sm"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Hero;
