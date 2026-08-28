import { useState, useEffect, useCallback, useRef} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone} from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '@/lib/images';
import TextPlugin from 'gsap/TextPlugin';
import { ABOUT_SLIDER } from '@/lib/images';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function About() {
  const [lightbox, setLightbox] = useState(null);
   const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % ABOUT_SLIDER.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + ABOUT_SLIDER.length) % ABOUT_SLIDER.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = ABOUT_SLIDER[current];

return(

    <section fetchpriority="high" style={{backgroundImage:`url(${slide.image})`}}
      className="relative h-screen w-full bg-center bg-cover over bg-norepeat flow-hidden" 
      aria-label="Hero"
      aria-roledescription="carousel"
    >
        <div className='absolute inset-0 object-cover'/>

        
      <div className='relative z-100 max-w-4xl pt-64 pl-4 text-[#fff] md:pr-[15rem] lg:pr-[20rem] xl:pr-[23rem]'>
        
  <h2 className="font-heading pb-4 text-3xl md:text-4xl font-semibold text-black">
              Our Work Place
            </h2>
                       <p className='text-base md:text-md xl:text-lg lg:leading-[1.5rem] lg:leading-[2rem]'>
               Clean lines, calming colors, durable materials, and efficient layouts work together to enhance
                the patient experience while supporting safe and seamless clinical operations.
                       </p>
                    
            </div>
             
</section>
)}