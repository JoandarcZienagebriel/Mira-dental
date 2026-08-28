import React, { useEffect} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ServerIcon } from 'lucide-react';
import {SERVICES_SUMMARY } from '@/lib/servicesData';
import gsap from 'gsap';
import { Check } from 'lucide-react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function DentistsSection({serviceRef}) {
gsap.registerPlugin(ScrollTrigger);
useEffect(()=>{
    const el = serviceRef.current;
    const animation = gsap.to(el, {
        scrollTrigger:{
            trigger:el,
            scrub:true,
            start: 'top top',
            end:'+=1000',
           
        }
    });
    return () => {
        animation.kill();
    };
}, [])


  return (
    <section id='service' ref={serviceRef} className="relative w-screen py-16 h-auto md:py-24 mt-[-100vh] bg-[#f6fff8]">
       <div className='absolute inset-0'></div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 z-[100]"
        >
 
          <h2 className="font-heading p-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
            Our Dental Services
          </h2>
          <p className='font-heading p-2 font-semibold text-[#000]'>Below are just some of the many procedures and services
            Your smile is our first priority, and we’ll give you something to smile about.</p> </motion.div>

 {/* Services grid */}
      <section className="py-8 md:py-12 ">
       
          <div className=''>
          <div className="mx-auto lg:grid grid-cols-3 items-center gap-[6rem] ">
            {SERVICES_SUMMARY.map((service, i) => (

              <div
               
                className={`grid grid-cols-1 items-center bg-[#cce3de] mb-8 border-[#cce3de] border-2 rounded-[1rem] lg:w-[25rem] lg:h-[43rem] flex-shrink-0 p-6 `}
              >
              
                  <h2 className="font-heading text-2xl md:text-xl font-semibold mb-4 text-accent">
                    {service.title}
                  </h2>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[16rem] md:h-[20rem] object-cover"
                  />
                  <ul className='font-body hidden group-hover:flex flex-col md:inline-block md:pt-4 whitespace-nowrap text-[#fff] text-sm lg:text-[1rem]'>
                        {service.subcategories.map((subcategory, index) => (
                              <li key={index} className='flex items-center gap-2 mb-2'> 
                               <Check strokeWidth={5} className="w-4 h-4 text-accent shrink-0" />
                 <span>{subcategory}</span>
                  </li>
                  
                            ))}

              </ul>  
                  <Link
                    to="/booking"
                    className="inline-flex text-[#000] items-center gap-2 mt-4 pl-4 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </Link>
       
                
              </div>
             
            ))}
          </div>
        
        </div>
      </section>

      </div>
    </section>
  );
}