import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/images';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {SERVICES} from '../../lib/servicesData';

export default function DentistsSection() {

  gsap.registerPlugin(ScrollTrigger)
  const serviceRef = useRef(null);
useEffect(()=>{
  const el = serviceRef.current;
  const animation = gsap.to(el,{
 scale:0.9,
    scrollTrigger:{
      trigger: el,
      scrub: true,
      start:'top 20%',
      end:'+=1000',
      pin: true,
      markers: true,
    }
  })
  return()=>{
    animation.kill();
  }
})

  return (
 <section className="py-20 md:py-42 lg:py-48">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
       
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
        
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center lg:h-[30rem] ${
                  i % 2 === 1 ? 'md:direction-rtl' : ''
                }`}  
              >
                <div className={`overflow-hidden rounded-lg ${i % 2 === 1 ? 'md:order-2' : ''}`} >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 border-2 border-accent lg:h-[25rem] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center">
                   
               
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#353238] mb-6 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-[#353238] text-[1rem] md:text-[1.5rem] font-bold leading-relaxed mb-6">
                    {service.description}
                  </p>
                 <div className="inline-flex mx-auto mt-2">
                <Link
          to="/booking"
          className="border border-accent rounded-[6rem] bg-accent text-white text-center px-6 py-2.5 md:px-4 py-3 lg:px-7 py-4 md:text-sm lg:text-[1rem] font-semibold hover:-translate-y-1 transition-all duration-300"
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