import React from "react";
import WorkTogether from "./WorkTogether";

const AboutSection = () => {
  return (
    <div className="mt-0">
      <section className="text-center text-[20px]">
        {/* About Section */}
        <section className="relative bg-[#f4f6f3] overflow-hidden">
          {/* Decorative background shape */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0 h-[415px]"
            style={{ backgroundImage: "url('1.png')" }}
          ></div>

          <WorkTogether />
        </section>
      </section>
    </div>
  );
};

export default AboutSection;
