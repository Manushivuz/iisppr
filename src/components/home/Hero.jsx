import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import MissionCard from "./MissionCard";

const Hero = () => {
  const learn_more = true;
  return (
    <div className="">
      <section className="text-center text-[20px]">
	  
	  
        <main className="relative z-20 flex-grow flex items-end w-full min-h-[82vh] bg-[url('/herobg.webp')] bg-cover bg-center">
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0  z-10"></div>

          <section className="z-20 w-full flex flex-col items-center xl:items-start lg:flex-row px-6 py-10 lg:justify-between gap-20 lg:gap-0">
            {/* Hero Section (Left) */}
            <div className="w-full flex flex-col xl:items-start items-center text-left lg:pr-10 ">
              <button className="mb-4 px-4 py-2 border border-white rounded-full text-sm text-white hover:bg-white hover:text-black">
                Give Hope For Homeless
              </button>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-2 text-white">
                Helping Each Other.
              </h1>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
                One Step At A Time
              </h1>
              <p className="text-sm md:text-lg max-w-xl text-white">
                We Seek out world changers and difference makers around the
              </p>
              <p className="text-sm md:text-lg mb-6 max-w-xl text-white">
                globe,and equip them to fulfill their unique purpose.
              </p>

              <button className="bg-[#C3FF00D9] text-white font-semibold px-6 py-2 rounded-full hover:bg-black hover:text-[#C3FF00D9] transition text-sm md:text-base">
                Read more →
              </button>
            </div>

            {/* Our Mission Section (Right) */}
              <MissionCard learn_more/>

          </section>
        </main>
      </section>
    </div>
  );
};

export default Hero;