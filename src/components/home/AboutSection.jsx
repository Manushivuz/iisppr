import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const AboutSection = () => {
  return (
    <div className=" h-[92vh]">
      <section className="text-center text-[20px]">
        {/* About Section */}
        <section className="relative bg-[#f4f6f3] h-[92vh] overflow-hidden">
          {/* Decorative background shape */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('1.png')", height: "415px" }}
          >
            <div className="absolute inset-0  bg-opacity-20 z-10" />
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="relative w-full lg:w-1/2 flex justify-center items-center">
              <img
                src="/about us.png"
                alt="Tractor spraying"
                className="w-[480px] h-[480px] object-cover relative top-[40px] rounded-xl "
              />
              <img
                src="/image 1.png"
                alt="Farmer carrying box"
                className="w-[360px] h-[360px] object-cover rounded-xl absolute bottom-[-95px] right-[-100px] "
              />
            </div>

            {/* Text Block */}
            <div className="w-full lg:w-1/2 text-left lg:ml-28 mt-[200px]">
              <p className="text-[18px] text-[#252A34] font-semibold uppercase mb-2">
                About Us
              </p>
              <h2 className="text-[39px] font-bold mb-4 leading-snug text-black">
                Your Support Is Really <br /> Powerful.
              </h2>
              <p className="text-[#444444] font-Montserrat mb-6 leading-relaxed">
                The secret to happiness lies in helping others. Never
                underestimate the difference you can make in the lives of the
                poor, the abused, and the helpless.
              </p>
              <button className="bg-[#C3FF00] text-black font-semibold px-6 py-3 rounded-full inline-flex items-center hover:bg-black hover:text-[#C3FF00] transition duration-300">
                Read More <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutSection;
