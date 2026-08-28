import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Import, Phone} from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '@/lib/images';
import sei from '../assets/img/sei.avif';
import DentistSectionOne from '../components/home/AboutPreview';
import DentistSectionTwo from '../components/home/Dentisttwo';
import { ABOUT_SLIDER } from '@/lib/images';
import Team from '../components/home/Team';

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



  return (
    <div >
       <section className="py-4 pt-24 left-0 right-0 md:pt-16">
              
              <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                 
                  <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
                    ABOUT US
                  </h1>
                   <div className="inline-flex flex-col items-center justify-center mx-auto mt-2">
                  <Link
                            to="/booking"
                            className="border border-accent rounded-[6rem] bg-accent text-white text-center px-6 py-3 text-[.9rem] hover:-translate-y-1 transition-all duration-300"
                          >
                            Book Appointment
                          </Link>
                                               <p className='flex justify-center items-center gap-2 py-2 '>
          or 
          <a
          href="tel:09336495034"
          className="flex items-center gap-2 md:text-sm xl:text-[1rem] font-medium transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
        +251 936495034
        </a>
        </p>
                               </div>
                </motion.div>
              </div>
              
    
   
            </section>




      {/* Gallery */}
    <section style={{backgroundImage:`url(${slide.image})`}}
      className="relative h-screen w-full bg-center bg-cover over bg-norepeat flow-hidden" 
      aria-label="Hero"
      aria-roledescription="carousel"
    >
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center pt-16">
          <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=' pt-16'
          >
            <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-semibold text-[#000] mb-4">
           Our Work Place
            </h1>
             <p className='space-y-5 leading-relaxed text-surface text-base md:text-md xl:text-lg max-w-2xl mx-auto'>
               Clean lines, calming colors, durable materials, and efficient layouts work together to enhance the patient experience while supporting safe and seamless clinical operations.
                       </p>
         
        </motion.div>
      </AnimatePresence>
  
                    
            </div>
             
</section>
<div className="max-w-4xl mx-auto px-4 md:px-6 text-center pt-[6rem] p-[2rem]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                 
                  <h2 className="font-heading text-xl md:text-2xl lg:text-4xl font-semibold text-[#000] mb-4">
                    Meet Our Team
                  </h2>
                  
                </motion.div>
              </div>
              
<DentistSectionOne/>
<DentistSectionTwo/>
<Team/>
    
    </div>
  );
}