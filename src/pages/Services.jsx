import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

import ServiceSection from '../components/home/DentistPreview';
export default function Services() {
  return (
    <div>
       <section className="py-4 pt-24 left-0 right-0 md:pt-16 bg-header">
              
              <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                 
                  <h1 className ="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-[#fff] mb-4">
                    WHAT WE OFFER
                  </h1>
                   <div className="inline-flex flex-col items-center justify-center mx-auto mt-2">
<Link
          to="/booking"
          className="border border-accent rounded-[6rem] bg-accent text-white text-center px-6 py-3 text-[.9rem] hover:-translate-y-1 transition-all duration-300"
        >
          Book Appointment
        </Link>
         <p className='flex justify-center items-center gap-2 py-2 text-[.8rem]'>
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
      {/* Header */}
      <section className="relative py-12 md:py-20 lg:h-[50em] bg-[url('../../assets/img/us-banner.avif')] bg-cover bg-no-repeat">
  
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='pt-16'
          >
           <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-semibold text-[#000] mb-4">
              Our Dental Services
            </h1>
            <p className="space-y-5 leading-relaxed text-surface text-base md:text-md xl:text-lg max-w-2xl mx-auto">
              Comprehensive dental care designed around your comfort, health, and confidence. Explore the full range of treatments we offer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
     <ServiceSection/>
    </div>
  );
}