import React from 'react';
import { motion } from 'framer-motion';
import { BEFORE} from '@/lib/servicesData';



export default function DentistsSection() {
  return (
    <section className="relative py-4 md:py-16 mt-16 bg-[#f6fff8]">
       
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 z-10"
        >
   
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
            BEFORE AND AFTER PHOTOS
          </h2>
        </motion.div>

 {/* Services grid */}

     
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {BEFORE.map((service, i) => (

              <div
               
                className={`grid grid-cols-1 items-center text-[#353238] mb-8 flex-shrink-0 `}
              >
              
                  <div className='relative overflow-hidden group'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[16rem] md:h-[20rem] lg:h-[25rem] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                    <div className='absolute inset-0 '></div>
        
          
</div>
                
              </div>
             
            ))}
          </div>

      </div>
    </section>
  );
}