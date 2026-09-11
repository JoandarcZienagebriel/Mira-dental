import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone} from 'lucide-react';
import { BEFORE} from '@/lib/servicesData';

export default function BeforeAfter(){
    return(
        <section className='relative py-4 md:py-16 lg:py-24 bg-[#f6fff8]'>
      

           <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center pb-8">
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=' pt-16'
          >
            <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-semibold text-[#000] mb-4">
           Let Us Change Your Smile
            </h1>
             <p className='space-y-5 leading-relaxed text-primary text-base md:text-md xl:text-lg max-w-2xl mx-auto'>
               Before and After Photos of Our Patients
                  </p>
         
        </motion.div>

  
                    
            </div>
    
            <div className="mx-auto grid grid-cols-1 p-2 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-8 md:p-4 lg:p-8">
                        {BEFORE.map((service, i) => (
            
                          <div
                           
                            className={`grid grid-cols-1 items-center text-[#353238] mb-8 md:mb-2 flex-shrink-0 xl:w-[28rem] `}
                          >
                          
                              <div className='relative overflow-hidden group'>
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-[30rem] md:h-[25rem] lg:h-[30rem] lg:w-full object-cover transition-transform duration-300 group-hover:scale-95"
                              />
                                <div className='absolute inset-0 '></div>
                    
                      
            </div>
                            
                          </div>
                         
                        ))}
                      </div>
            
        </section>
    )
}