import React, { useRef, useState, useEffect } from 'react';
import { FaHandsHelping, FaUsers, FaDove, FaGlobe } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { icon: <FaHandsHelping className="text-green-700 text-3xl" />, number: 4597, label: 'People Rised' },
  { icon: <FaUsers className="text-green-700 text-3xl" />, number: 8945, label: 'Volunteers' },
  { icon: <FaDove className="text-green-700 text-3xl" />, number: 10000000, label: 'Lives Touched' },
  { icon: <FaGlobe className="text-green-700 text-3xl" />, number: 100, label: 'Countries' },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (isInView) setStart(true);
  }, [isInView]);

  return (
    <section ref={ref} className="bg-[linear-gradient(to_right,#ff0000,#00ff00,#0000ff)] py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          We Believe We Can Save More Lives With You
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/20 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="mb-4 bg-white/20 p-4 rounded-full w-fit mx-auto">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold">
                {start ? <CountUp end={stat.number} duration={2} separator="," /> : 0}+
              </div>
              <p className="text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
