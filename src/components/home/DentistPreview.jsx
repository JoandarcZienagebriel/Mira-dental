import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import {SERVICES} from '../../lib/servicesData';
import { backIn, backInOut, easeIn, easeInOut } from 'framer-motion';
 gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function DentistsSection() {

const sectionRef = useRef(null);
const paraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.service-item');
const el = sectionRef.current;
      elements.forEach((el) => {
        gsap.to(el, {
          scale: 0.9,
          ease: easeIn,
          duration:1,
          scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: 'top 15%',
            end: '+=2000',
            pin: true,
       
          },
        });
         });
    }, sectionRef);
     

    return () => ctx.revert();
  }, []);

  useEffect(() => {
const ctx= gsap.context(()=>{
  const elements = gsap.utils.toArray('.service-para')
 const el1 = paraRef.current;
 elements.forEach((el1)=>{
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
},);
 })

 

    return()=> ctx.revert();

},[]);

  return (
 <section className="py-20 md:py-42 lg:py-54 bg-surface" ref={sectionRef}>
        <div className="">
       
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
        
                className={`service-item grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center lg:h-[40rem] ${
                  i % 2 === 1 ? 'md:direction-rtl' : ''
                }`}  
              >
                <div className={` ${i % 2 === 1 ? 'md:order-2' : ''}`} >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[58rem] h-[40rem] object-cover"
                  />
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center">
                   
               
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#353238] px-8 mb-6 leading-tight">
                    {service.title}
                  </h2>
                  <p className="service-para text-card text-[1rem] md:text-[1.2rem] xl:text-[1.4rem] font-bold leading-relaxed px-8 mb-6" ref={paraRef}>
                    {service.description}
                  </p>
                 <div className="inline-flex mx-auto mt-2">
                <Link
          to="/booking"
          className="border border-accent rounded-[6rem] bg-accent text-white text-center px-6 py-2.5 md:px-4 py-3 lg:px-7 py-4 mx-8 md:text-sm lg:text-[1.3rem] font-semibold hover:-translate-y-1 transition-all duration-300"
        >
          Book & Smile
        </Link>
             </div>
                </div>
              </div>
            ))}
      
        </div>
       
      </section>

        );
}