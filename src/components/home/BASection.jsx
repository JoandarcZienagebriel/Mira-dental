import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/images';
import { Link } from 'react-router-dom';
import { ArrowRight, Import } from 'lucide-react';
import { BEFORE, SERVICES } from '@/lib/servicesData';



export default function DentistsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#b3d89c]/60 ">
       
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 z-10"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[#4f772d]">Transformation</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-[#353238]">
            BEFORE AND AFTER PHOTOS
          </h2>
        </motion.div>

 {/* Services grid */}
      <section className="py-8 md:py-12">
       
          <div className=''>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {BEFORE.map((service, i) => (

              <div
               
                className={`grid grid-cols-1 items-center text-[#353238] mb-8 lg:w-[25rem] flex-shrink-0 `}
              >
              
                  <div className='relative'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[16rem] md:h-[20rem] lg:h-[25rem] object-cover "
                  />
                    <div className='absolute inset-0 bg-[#000]/70 hover:bg-[#000]/0'></div>
        
          
</div>
                
              </div>
             
            ))}
          </div>
        
        </div>
      </section>

      </div>
    </section>
  );
}