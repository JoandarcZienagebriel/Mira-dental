import { useState, useEffect, useCallback, useRef} from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import TextPlugin from 'gsap/TextPlugin';
import team from '../../assets/img/assistant.avif'
export default function Team() {

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

    }})
 
return()=>{
  animation.kill();
};
},[]);


  return (


<section className='' ref={aboutRef}>

  
     
        <div className="flex flex-col items-center gap-0 h-[36rem] md:h-[30rem] lg:h-[60rem] w-screen" style={{backgroundImage:`url(${team})`, backgroundRepeat:'no-repeat',backgroundSize: '100%'}}
       >
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mt-[17rem] md:border-white md:border-4 order-2 p-4 md:order-1 md:w-1/2 md:bg-card/50 md:p-10 md:w-[30rem] lg:px-12 lg:py-12 md:m-auto"
          >
         
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6 leading-tight">
             Our Dental Team
            </h2>
            <p className="text-card text-[1rem] mt-[-.5em] md:text-[1.2rem] xl:text-[1.4rem] font-bold leading-relaxed" ref={paraRef}>
            Behind every successful treatment is a dedicated team. Our dental assistants and support staff work closely with our doctors to ensure every visit is smooth.
             From welcoming patients to assisting during procedures and coordinating follow-up care, our team is committed 
             to making every patient feel well cared for.
            </p>
           
           
          </motion.div>

     

</div>
</section>
    
    
  );
}