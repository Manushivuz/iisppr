import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Remove if not using framer-motion

const ProjectsHighlight = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Fusce Elementum Sem Quis Eros Posuere, Vitae Tempor Tellus Porta. Sed Ultricies Libero Quis Sem Porttitor Lacinia. Nunc A Ultrices Ex.',
    },
    {
      title: 'Project 2',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Fusce Elementum Sem Quis Eros Posuere, Vitae Tempor Tellus Porta. Sed Ultricies Libero Quis Sem Porttitor Lacinia. Nunc A Ultrices Ex.',
    },
    {
      title: 'Project 3',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Fusce Elementum Sem Quis Eros Posuere, Vitae Tempor Tellus Porta. Sed Ultricies Libero Quis Sem Porttitor Lacinia. Nunc A Ultrices Ex.',
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/Bali rice fields.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 pt-20 pb-8 text-white flex flex-col items-start w-full max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[48px] md:text-[80px] font-playfair font-medium leading-tight"
        >
          Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg font-montserrat leading-relaxed max-w-3xl"
        >
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Fusce Elementum Sem Quis Eros Posuere, Vitae Tempor Tellus Porta. Sed Ultricies Libero Quis Sem Porttitor Lacinia. Nunc A Ultrices Ex.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6"
        >
          <Link to="/projects">
            <button className="bg-lime-400 text-black font-semibold font-montserrat px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:bg-black hover:text-white hover:scale-105 hover:shadow-xl">
              See More <span className="text-xl">→</span>
            </button>
          </Link>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              {/* Glow Border on Hover */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-lime-400 opacity-0 group-hover:opacity-100 blur transition duration-300"></div>

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg border border-white/20 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl hover:rotate-[1deg]">
                <h3 className="text-2xl font-playfair mb-4">{project.title}</h3>
                <p className="text-sm font-montserrat mb-6">{project.description}</p>
                <Link
                  to="/projects"
                  className="text-white font-semibold font-montserrat inline-flex items-center gap-1 hover:underline"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsHighlight;
