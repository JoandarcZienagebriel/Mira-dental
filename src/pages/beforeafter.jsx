import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone} from 'lucide-react';
import { BEFORE} from '@/lib/servicesData';

export default function BeforeAfter(){
    return(
        <div >
       <section className="py-4 pt-24 left-0 right-0 md:pt-16 bg-header md:mt-[-1rem]">
              
              <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                 
                  <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-[#fff] mb-4">
                    BEFORE & AFTER
                  </h1>
                   <div className="inline-flex flex-col items-center justify-center mx-auto mt-2">
                  <Link
                            to="/booking"
                            className="border border-accent rounded-[6rem] bg-accent text-white text-center px-6 py-3 text-[.9rem] hover:-translate-y-1 transition-all duration-300"
                          >
                            Book Appointment
                          </Link>
                                               <p className='flex justify-center items-center gap-2 py-2 '>
          or 
          <a
          href="https://wa.me/251936495034"
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
                                className="w-full h-[30rem] md:h-[25rem] lg:h-[30rem] lg:w-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                                <div className='absolute inset-0 '></div>
                    
                      
            </div>
                            
                          </div>
                         
                        ))}
                      </div>
            
        </div>
    )
}