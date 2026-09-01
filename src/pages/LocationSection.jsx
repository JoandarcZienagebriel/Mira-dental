import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star, Clock } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import location from '../assets/img/receptionist.avif';

export default function LocationSection() {
  return (
    <section className="flex flex-col items-center justify-start h-[90vh] lg:h-[100vh] relative" id='location' style={{backgroundImage: `url(${location})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
 
<div className=' md:border-white md:border-4 md:w-[28rem] md:h-[30rem] my-4 lg:my-auto lg:w-[40rem] lg:h-[34rem] mx-auto md:bg-card/50'>
  
                <div className="max-w-4xl mx-auto px-4 md:px-6 text-center py-4 md:pt-12">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                          >
                           
                            <h1 className="font-heading text-3xl text-center md:text-4xl lg:text-5xl font-semibold text-surface mb-4 mt-12 md:mt-8">
                             LOCATION
                            </h1>
                             <div className="inline-flex flex-col items-center justify-center mx-auto mt-2">
          <Link
          to="/booking"
          className="border border-accent rounded-[6rem] bg-accent text-white text-center px-6 py-2.5 md:px-4 py-3 lg:px-6 py-3 md:text-sm xl:text-[1rem] font-semibold hover:-translate-y-1 transition-all duration-300"
        >
          Book an Appointment
        </Link>
      </div>
                          </motion.div>
                      </div>
            <div
              className='text-[#000] flex flex-col items-center text-[1rem] md:text-[1.2rem] mt-[4rem] md:mt-[-1.5rem]'
            > 
            
              <div className="relative space-y-5 mb-4 p-4 md:pl-[6rem]">
      
                <div className="relative flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm">XQPF+9VH, Rwanda Street, Addis Ababa</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium ">Phone</p>
                    <a href="tel:09336495034" className="text-sm hover:text-[#8E8358] transition-colors">
                      0933 649 5034
                    </a> - <a href="tel:09336495034" className="text-sm hover:text-[#8E8358] transition-colors">
                      0933 649 5034
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                <FaTiktok className="w-5 h-5 mt-0.5 shrink-0 " />
                  <div>
                    <p className="font-medium"><a href="https://www.tiktok.com/@miradental" >TikTok </a></p>
                    
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm">Closed · Opens 8:30 AM Wed</p>
                    <p className="text-sm mt-1">Mon–Sat: 8:30 AM – 6:00 PM</p>
                  </div>
                </div>
                </div>
            </div>
   </div>
    </section>
  );
}