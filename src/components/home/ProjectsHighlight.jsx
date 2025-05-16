import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsHighlight = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This project focuses on sustainable solutions using modern technology for rural development.',
    },
    {
      title: 'Project 2',
      description: 'An initiative to provide digital education platforms for underprivileged children.',
    },
    {
      title: 'Project 3',
      description: 'A community-driven project aimed at promoting organic farming through IoT tools.',
    },
  ];

  return (
    <div
      className="w-full min-h-screen text-gray-800 py-16 px-6"
      style={{
        background: 'linear-gradient(to right, #edf8e9, #c7e9c0, #a1d99b, #74c476, #41ab5d, #238b45, #005a32)',
      }}
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-green-900">
        Our Projects
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg max-w-3xl font-light mb-8">
        We work on real-world impact through community-centered projects. Explore some of our highlighted work below.
      </p>

      {/* Button */}
      <Link to="/projects">
        <button className="bg-green-600 text-white font-medium px-6 py-2 rounded hover:bg-green-800 transition">
          See More →
        </button>
      </Link>

      {/* Project Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-green-300 shadow ring-1 ring-green-500/30 ring-offset-2 ring-offset-green-100"
          >
            <h3 className="text-xl font-semibold mb-2 text-green-800">{project.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{project.description}</p>
            <Link
              to="/projects"
              className="text-green-700 hover:underline text-sm font-medium"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsHighlight;
