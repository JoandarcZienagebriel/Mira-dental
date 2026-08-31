import { useState, useEffect, useCallback, useRef} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Section} from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '@/lib/images';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import dentist_two from '../../assets/img/senior.avif';

gsap.registerPlugin(ScrollTrigger, TextPlugin);
export default function DentistSectionTwo() {

const paraRef = useRef(null);
const aboutRef1 = useRef(null);

useEffect(() => {
const ctx= gsap.context(()=>{
 const el1 = paraRef.current;
  const el = aboutRef1.current;

 ScrollTrigger.create( {
      trigger: el,
      scrub: true,
      pin:true,
      start:'top 10%',
      end:'+=1000',
    });

 gsap.to(el1, {
  
      text: {
      value: el1.textContent,
      oldClass: "start",
      newClass: "end",
    },
     scrollTrigger: {
      trigger: el1,
      scrub: 1,
     start:'top top',
       end:'+=1000',
},
});
}, aboutRef1);

    return()=> ctx.revert();

},[]);
 






  return (


<section className='lg:h-[40rem] bg-[#fff] border-2' ref={aboutRef1}>

         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="gap-0 w-full h-full min-h-screen grid grid-rows-[1fr_1fr] bg-surface md:grid-rows-none md:grid-cols-[1fr_1fr]"
        >
              <div className='order-2 md:order-1 p-[1.5rem] mt-16'>
          <h2 className="font-heading text-3xl text-center md:text-4xl font-semibold text-primary mb-6 leading-tight">
      Dr. Hana Mekonnen
          </h2>
    
                  <p className='font-body text-card text-[1rem] md:text-[1.2rem] xl:text-[1.4rem] font-bold leading-relaxed lg:px-12 xl:px-28' ref={paraRef} >
                  Dr. Hana Mekonnen is an Ethiopian dentist with a background in general and cosmetic dentistry. She trained in Addis Ababa and has worked with patients
                   across different age groups,
                   developing a reputation for gentle, attentive care.
                   Her focus is on creating healthy, natural-looking smiles while making every patient feel comfortable.s
</p>
                 
                 </div>
                 <img src={dentist_two} className='order-1 w-full h-full object-cover md:order-2 md:w-full'/>
               
        </motion.div>
</section>
    
    
  );
}