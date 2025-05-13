import React from 'react';
import { Link } from 'react-router-dom';

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
      className="relative w-full h-[975px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/Bali rice fields.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 pt-20 pb-8 text-white flex flex-col items-start w-full max-w-7xl mx-auto px-6">
        <h2 className="text-[80px] font-playfair font-medium leading-tight">
          Projects
        </h2>

        <p className="mt-6 text-lg font-montserrat leading-relaxed max-w-3xl">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Fusce Elementum Sem Quis Eros Posuere, Vitae Tempor Tellus Porta. Sed Ultricies Libero Quis Sem Porttitor Lacinia. Nunc A Ultrices Ex.
        </p>

        <div className="mt-6">
          <Link to="/projects">
            <button className="bg-lime-400 text-black font-semibold font-montserrat px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:bg-black hover:text-white hover:scale-105 shadow-md">
              See More <span className="text-xl">→</span>
            </button>
          </Link>
        </div>

        {/* Project Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg border border-white/20 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-playfair mb-4">{project.title}</h3>
              <p className="text-sm font-montserrat mb-6">{project.description}</p>
              <Link
                to="/projects"
                className="text-white font-semibold font-montserrat inline-flex items-center gap-1 hover:underline"
              >
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsHighlight;
