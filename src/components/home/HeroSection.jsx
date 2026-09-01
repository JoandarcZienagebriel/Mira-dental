import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import { IMAGES, HERO_SLIDES } from '@/lib/images';


export default function HeroSection() {
const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = HERO_SLIDES[current];

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const logoRef= useRef(null);
useEffect(()=>{
  const animation = gsap.to('.hero',{
    scrollTrigger:{
      trigger: '.hero',
      pin: true,
      start:'top 5%',
      end:'+=1000',
      
    }
  })
  return()=>{
    animation.kill();
  }
},[])

  return (

    
 
     <section className="hero relative w-screen h-[100vh] overflow-hidden mt-[-7rem]">
      {/* Background images */}
<div className="relative h-screen">
       
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .6 }}
          className="absolute inset-0 "
        >
          <img
            src={slide.image}
            alt={slide.tagline}
            className="w-full h-full object-cover overflow-hidden"
            fetchpriority="high"
          />
        
        </motion.div>
      </AnimatePresence>

   <div className="relative h-screen overflow-hidden">
      {/* Content overlay */}
     
  
      <div className="relative flex flex-col items-left justify-center h-full pb-16 md:pb-[5rem] px-4 mt-[7rem]">
    

          <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-2xl text-primary text-left md:text-4xl lg:w-[55rem] xl:text-5xl font-bold"
        >
        GET A LIFE CHANGING SMILE, YOU'RE JUST ONE APPOINTMENT AWAY.
        </motion.h1>

        
     
         <div className='flex gap-4'>
           <Link
            to="/booking"
            className="font-body bg-accent px-3 py-5 rounded-[6rem] text-center text-white md:px-8 md:py-6 text-[1rem] md:text-[1.3rem] mt-8 font-medium hover:-translate-y-1 transition-all duration-300"
          >
            Book an appointment
          </Link>
<Link
            to="/booking"
            className="font-body bg-accent px-2 py-5 rounded-[6rem] text-center text-white md:px-8 md:py-6 text-[1rem] md:text-[1.3rem] mt-8 font-medium hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </Link>
         </div>

         </div>


      
     </div>
     
      </div>
       
    </section>

  );
}