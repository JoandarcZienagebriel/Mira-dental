import React, { useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/images';
import { Link } from 'react-router-dom';
import { ArrowRight, ServerIcon } from 'lucide-react';
import {PROCEDURE } from '@/lib/servicesData';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ProcedureSection() {


  return (
    <section id='service' className="relative w-screen py-16 h-auto md:py-24 bg-[#f6fff8]">
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
           Your Journey in Mira Dental Clinic
          </h2>
         </motion.div>

 {/* Services grid */}
      <section className="py-8 md:py-12">
      <div className=''>
          <div className="mx-auto lg:grid grid-cols-4 items-center">
            {PROCEDURE.map((service, i) => (
              <div
                className={`flex flex-col gap-8 bg-[#cce3de] mb-4 border-[#cce3de] border-2 rounded-[1rem] lg:w-[18rem] lg:h-[20rem] flex-shrink-0 p-4 `}
              >
        <h2 className="font-heading text-2xl md:text-xl font-semibold text-accent">
                    {service.title}
                  </h2>
                  
                  <p className='font-body text-[#fff] text-sm lg:text-[1.2rem]'>
                        {service.description}
              </p>  
        </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </section>
  );
}