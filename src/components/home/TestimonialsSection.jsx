import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      imageSrc: '/t1.webp',
      text: "They are very promoted when it comes to time management and presentation.",
      author: "Anthony Mark Kamara jr.",
    },
    {
      imageSrc: '/t2.webp',
      text: "The IISPPR was a great learning experience for me.",
      author: "Latifa Mustafa",
    },
    {
      imageSrc: '/t3.webp',
      text: "My sincere gratitude goes to the organizers, sponsors, and management.",
      author: "Adebayo Samson Akinade ",
    },
    {
      imageSrc: '/t4.webp',
      text: "Created a collaborative learning environment that fostered my innovation.",
      author: "Derrick Byamungu",
    },
    {
      imageSrc: '/t5.webp',
      text: "I look forward to staying connected with the IISPPR organization.",
      author: "Utsab Bhattarai",
    },
    {
      imageSrc: '/t6.webp',
      text: "I'm thankful to the mentors and peers for their support.",
      author: "Shariff Mohamed Abdi",
    },
    {
      imageSrc: '/t7.webp',
      text: "I will use the knowledge to create positive impact in the data analysis industry",
      author: "Umaru Jack Kamara",
    },
    {
      imageSrc: '/t8.webp',
      text: "It was an enriching experience. ",
      author: "Alafiatayo Christopher Kehinde",
    },
    {
      imageSrc: '/t9.webp',
      text: "Broadened my perspective on the role of data in public service.",
      author: "Mohamed Omar Qasim",
    },
    {
      imageSrc: '/t10.webp',
      text: "I witnessed firsthand their relentless commitment to rigorous teaching skills.",
      author: "Zahra Mohamed Abdul",
    },
    {
      imageSrc: '/t11.webp',
      text: "My deepest gratitude to the IISPPR team for offering such a meaningful and empowering program.",
      author: "Gilbert Kipkoech Too",
    },
  ];

  return (
    <section className="bg-[#11160e] text-white pt-16 lg:h-screen pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">

        {/* Headings and CTA */}
        <div className="text-center mb-12 lg:mb-0 lg:absolute lg:top-[280px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-full lg:max-w-2xl z-20">
          <h3 className="text-lg font-semibold font-[Playfair Display] text-[28px] sm:text-[32px] text-gray-300 mb-1">
            — Testimonials —
          </h3>

          <h2 className="text-3xl sm:text-4xl font-bold leading-snug my-2 lg:mt-[7vh]">
            Trusted by leaders <br />
            <span className="text-lime-400">from various industries</span>
          </h2>

          <p className="text-gray-300 mb-5">
            Learn why professionals trust our solutions to<br className="hidden sm:inline" /> complete their customer journeys.
          </p>

          <button className="bg-lime-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-black hover:text-white transition duration-300">
            Read Success Stories →
          </button>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:hidden mt-12">
          {testimonials.map((t, i) => (
            <Card key={i} imageSrc={t.imageSrc} text={t.text} author={t.author} />
          ))}
        </div>

        {/* Large Screen Layout */}
        <div className="hidden lg:grid grid-cols-7 justify-items-center min-h-[280px] mt-12 gap-y-6">
          {/* Column 1: 2 cards */}
          <div className="flex flex-col gap-6 lg:gap-[10vh] mt-10">
            <Card {...testimonials[0]}/>
            <Card {...testimonials[1]} />
          </div>

          {/* Column 2: 2 cards */}
          <div className="flex flex-col lg:gap-[10vh] gap-6">
            <Card {...testimonials[2]} />
            <Card {...testimonials[3]} />
          </div>

          {/* Column 3: 1 card */}
          <div className="flex flex-col mt-16">
            <Card {...testimonials[4]} />
          </div>

          {/* Column 4: 1 card */}
          <div className="flex flex-col">
            <Card {...testimonials[5]} />
          </div>

          {/* Column 5: 1 card */}
          <div className="flex flex-col mt-16">
            <Card {...testimonials[6]} />
          </div>

          {/* Column 6: 2 cards */}
          <div className="flex flex-col gap-6 lg:gap-[10vh]">
            <Card {...testimonials[7]} />
            <Card {...testimonials[8]} />
          </div>

          {/* Column 7: 2 cards */}
          <div className="flex flex-col gap-6 mt-10 lg:gap-[10vh]">
            <Card {...testimonials[9]} />
            <Card {...testimonials[10]} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ imageSrc, text, author }) => (
  <div className=" xl:w-[11vw] lg:w-[13vw] lg:h-[30vh] w-[60vw] h-[50vh] sm:w-[40vw] md:w-[30vw] bg-gray-300 rounded-xl flex flex-col items-center justify-start shadow-md mx-auto p-3 relative text-black">

    {/* Image bubble: absolute on lg+ */}
    <div className="w-16 h-16 mt-4 mb-2 bg-white rounded-full overflow-hidden flex items-center justify-center 
                    lg:absolute lg:top-[-9vh] lg:left-1/2 lg:transform lg:-translate-x-1/2">
      {imageSrc && (
        <img
          src={imageSrc}
          alt="testimonial"
          className="w-full h-full object-cover"
        />
      )}
    </div>

    {/* Testimonial text with styled quotes */}
    <p className="text-xs sm:text-sm mt-2 px-2 text-center font-medium xl:text-[10px]">
      <span className="text-red-500 text-lg">“</span>
      {text}
      <span className="text-red-500 text-lg">”</span>
    </p>

    {/* Author with styled ~ and name */}
    {author && (
      <p className="text-xs mt-2 px-2 text-center font-semibold text-gray-600">
        <span className="text-red-900 text-lg mr-1">~</span>{author}
      </p>
    )}
  </div>
);

export default TestimonialsSection;
