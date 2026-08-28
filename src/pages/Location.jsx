import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star, Clock } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import locationbg from '../assets/img/receptionist.avif'

export default function Location() {
  return (
    <div id='location'>
       <section className="py-4 pt-24 left-0 right-0 md:pt-16">
                    
                    <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                       
                        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-[#132a13] mb-4">
                         LOCATION
                        </h1>
                         <div className="inline-flex flex-col items-center justify-center mx-auto mt-2">
      <Link to="/booking" className="bg-[#4f772d] rounded-[4rem] text-white px-6 py-3 text-[.9rem] hover:bg-[#4f772d]">
                                                      Book an appointment
                                                    </Link>
                                                     <p className='flex justify-center items-center gap-2 py-2 text-[.8rem]'>
                or 
                <a
                href="tel:09336495034"
                className="flex items-center gap-2 md:text-sm xl:text-[1rem] font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
              +251 933 649 5034
              </a>
              </p>
                                     </div>
                      </motion.div>
                    </div>
                  </section>
      {/* Header */}
      <section className="relative py-12 left-0 right-0 md:py-20 bg-center bg-cover bg-no-repeat"style={{backgroundImage:`url(${locationbg})`}}>
         <div className='absolute inset-0 bg-[#000]/20'></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-semibold text-[#132a13] mb-4">
              Our Location
            </h1>
            <p className="space-y-5 leading-relaxed text-[#fff] text-base md:text-md xl:text-lg max-w-2xl mx-auto">
              Conveniently located on Rwanda Street in the heart of Addis Ababa, Dental Clinic is easy to reach by car or public transportation. We welcome walk-ins and appointments alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info + Map */}
      <section className="py-16 md:py-24 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Clinic Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#353238] mb-6">
               Dental Clinic
              </h2>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4f772d] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#273138]">Address</p>
                    <p className="text-[#353238] text-sm">XQPF+9VH, Rwanda Street, Addis Ababa</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#4f772d] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#273138]">Phone</p>
                    <a href="tel:09336495034" className="text-[#353238] text-sm hover:text-[#1E3A8A] transition-colors">
                      0933 649 5034
                    </a> - <a href="tel:09336495034" className="text-[#353238] text-sm hover:text-[#1E3A8A] transition-colors">
                      0933 649 5034
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                <FaTiktok className="w-5 h-5 text-[#4f772d] mt-0.5 shrink-0 " />
                  <div>
                    <p className="font-medium text-[#273138]"><a href="https://www.tiktok.com/@miradental" >TikTok </a></p>
                    
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#4f772d] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#273138]">Rating</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[#353238] text-sm">5.0</span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#4f772d] text-[#4f772d]" />
                        ))}
                      </div>
                      <span className="text-[#273138] text-sm">(3 reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#4f772d] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#273138">Hours</p>
                    <p className="text-[#353238] text-sm">Closed · Opens 8:30 AM Wed</p>
                    <p className="text-[#353238] text-xs mt-1">Mon–Sat: 8:30 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center bg-[#4f772d] text-white px-6 py-3 font-semibold text-sm hover:bg-[#4f772d] hover:rounded-full transition-colors"
                >
                  Book Online
                </Link>
                <a
                  href="tel:09336495034"
                  className="inline-flex items-center justify-center border-2 border-[#353238] text-[#353238] px-6 py-3 font-semibold text-sm hover:bg-[#353238] hover:text-white hover:rounded-full transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call to Book
                </a>
              </div>
            </motion.div>

        
          </div>
        </div>
      </section>
    </div>
  );
}