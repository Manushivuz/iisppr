import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="bg-[#11160e] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Cards Layout */}
        <div className="grid grid-cols-7 gap-4 justify-items-center mb-12">
          {/* Row 1 */}
          <div className="col-span-1" />
          <Card />
          <div className="col-span-1" />
          <Card />
          <div className="col-span-1" />
          <Card />
          <div className="col-span-1" />

          {/* Row 2 */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

          {/* Row 3 */}
          <div className="col-span-1" />
          <Card />
          <div className="col-span-1" />
          <Card />
          <div className="col-span-1" />
          <Card />
          
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold tracking-wider text-gray-300">— Testimonials —</h3>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 leading-snug">
          Trusted by leaders <br />
          <span className="text-lime-400">from various industries</span>
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mt-4 mb-8">
          Learn why professionals trust our solutions to complete their customer journeys.
        </p>

        <button className="bg-lime-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-black hover:text-white transition duration-300">
          Read Success Stories →
        </button>
      </div>
    </section>
  );
};

const Card = () => (
  <div className="w-28 h-36 bg-gray-300 rounded-xl flex items-center justify-center shadow-md">
    <div className="w-10 h-10 bg-white rounded-full" />
  </div>
);

export default TestimonialsSection;
