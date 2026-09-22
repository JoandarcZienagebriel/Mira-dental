import { useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import dentistOne from '../../assets/img/tool.avif';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function DentistSectionOne() {

const paraRef = useRef(null);
const aboutRef = useRef(null)
useEffect(() => { 
  const ctx = gsap.context(()=>{

  const el = aboutRef.current;
  const el1 = paraRef.current;
  
ScrollTrigger.create({
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
   }, aboutRef);
 
return()=>ctx.revert();

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
          <h2 className="font-heading text-3xl text-center md:text-4xl font-semibold text-primary mb-6 leading-tight">
      Dr. Etsetibeb Abebe
          </h2>
    
                  <p className='font-body text-card text-[1rem] md:text-[1.2rem] xl:text-[1.4rem] font-bold leading-relaxed lg:px-12 xl:px-28' ref={paraRef} >
              Dr. Etsetibeb Abebe is an experienced Ethiopian dentist and graduate of Addis Ababa University.
                 With years of clinical experience, he provides comprehensive dental care with a focus on precise treatment, 
                 patient comfort, and long-term oral health.
</p>
                 
                 </div>
                               <img src={dentistOne} alt=' Dr. Etsetibeb Abebe' className='order-1 w-full h-full object-cover md:order-1 md:w-full xl:h-full'/>
        </motion.div>
   
     


</section>
    
    
  );
}