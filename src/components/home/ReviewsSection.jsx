import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const reviews = [
  {
    name: 'Hana Girma',
    time: '2 months ago',
    rating: 5,
    text: 'Very professional and caring staff. The clinic is clean and modern. Highly recommend!'
  },
  {
    name: 'Jess',
    time: '2 months ago',
    rating: 5,
    text: "Excellent review and very friendly staff. My visit was quick and comfortable.",
  },
  {
    name: 'Dawit Mengistu',
    time: '1 month ago',
    rating: 5,
    text: "The dentist was professional and explained everything clearly. Highly recommend!",
  },
   {
    name: 'Yors',
    time: '1 month ago',
    rating: 5,
    text: "Clean clinic, welcoming team, and outstanding dental care. I'll definitely be back.",
  },
    {
    name: 'Yors',
    time: '1 month ago',
    rating: 5,
    text: "Very professional and caring staff. The clinic is clean and modern. Highly recommend!",
  },
 
   
];

  gsap.registerPlugin(ScrollTrigger);

export default function ReviewsSection() {
 
useEffect(() => {

  const ctx = gsap.context(() => {
    const items = gsap.utils.toArray('.review-item');

    gsap.to(items, {
      xPercent: -100,
      duration: 17,
      ease: 'none',
      repeat: -1,
    });
  });

  return () => ctx.revert();
}, []);

  return (
    
    <section className="hidden lg:block py-12 bg-[#fff]">
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:pt-[4rem] lg:pb-[4rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-[#353238] pt-4 ">
            Smashing reviews from our patients
          </h2>
        </motion.div>
{/* reviews grid */}
      <section className="py-8 md:py-12" >
       
          <div className='lg:overflow-x-[60rem] hide-scrollbar'>
         
             <div className="grid grid-flow-col auto-cols-[15rem] h-full md:grid-cols-auto hide-scrollbar gap-[9rem] px-2 ml-[-6rem]">
       
            {reviews.map((review, i) => (
            <div
              key={review.name}
             
              className={`review-item flex flex-col items-start justify-center p-12 md:p-8 bg-card w-[22rem] h-[20rem]`}
          >

             
   
               <p className="font-body text-[#fff] leading-relaxed mb-6 text-md">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-[#000] text-[1rem]">{review.name}</p>
                <p className="text-sm text-primary mt-0.5">{review.time}</p>
       
              </div>
                
          
            </div>
          ))}
          </div>
        </div>
        
     
      </section>
      </div>
    </section>
  );
}