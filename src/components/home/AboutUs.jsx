import { useState, useEffect, useCallback, useRef} from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import TextPlugin from 'gsap/TextPlugin';
import team from '../../assets/img/team.jpg';


export default function DentistSectionOne() {

gsap.registerPlugin(ScrollTrigger, TextPlugin);
const paraRef = useRef(null);
const aboutRef = useRef(null)
useEffect(() => {

  const el = aboutRef.current;
 const animation = gsap.to(el, {

     scrollTrigger: {
      trigger: el,
      scrub: true,
           pin:true,
      start:'top 10%',
      end:'+=1000',
    }})
 
return()=>{
  animation.kill();
};
},[]);
useEffect(() => {

  const el1 = paraRef.current;

 const animation = gsap.to(el1, {
  
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

    }})
 
return()=>{
  animation.kill();
};
},[]);


  return (


<section className='lg:h-[40rem]' ref={aboutRef}>

  
     
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="gap-0 w-full h-full min-h-screen grid grid-rows-[1fr_1fr] bg-surface md:grid-rows-none md:grid-cols-[1fr_1fr]"
        >
              <div className='order-2 md:order-2 p-[1.5rem] mt-16'>
          <h2 className="font-heading text-3xl text-center md:text-4xl font-semibold text-[#000] mb-6">
       Meet Our Team
          </h2>
    
                  <p className='font-body text-card text-[1rem] md:text-[1.5rem] font-bold leading-relaxed lg:px-12 xl:px-28' ref={paraRef} >
                  As your dental health professionals, we want you to be confident knowing that we are a team of highly trained and skilled
                   clinicians.  We pride ourselves in providing the care you need to keep your smile healthy.  To give you the best possible service and results,
                    we are committed to continual education and learning.  Building a foundation of trust by treating our patients as special individuals is vital to our success.
                    
</p>
                 
                 </div>
                               <img src={team} className='order-1 w-full h-full object-cover md:order-1 md:w-full xl:h-[40rem]'/>
        </motion.div>
   
     


</section>
    
    
  );
}