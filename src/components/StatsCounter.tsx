import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA } from '../data/portfolioData';

export const StatsCounter: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700/60">
          {STATS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 flex flex-col items-center justify-center ${index > 0 ? 'pt-6 md:pt-4' : ''}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 mb-1">
                {item.prefix || ''}
                {isInView ? (
                  <Counter targetValue={item.value} />
                ) : (
                  <span>0</span>
                )}
                {item.suffix}
              </div>
              
              <div className="text-sm font-bold text-slate-200 mt-1">
                {item.label}
              </div>

              <div className="text-[11px] text-slate-400 mt-0.5 max-w-[160px]">
                {item.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Animated Number Component
const Counter: React.FC<{ targetValue: number }> = ({ targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const steps = 40;
    const increment = targetValue / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetValue]);

  return <span>{count}</span>;
};
