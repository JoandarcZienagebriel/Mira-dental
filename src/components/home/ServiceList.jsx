import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { IMAGES } from '@/lib/images';



export default function AboutPreview() {
 const [lightbox, setLightbox] = useState(null);
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto ">
      
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                  {IMAGES.gallery.map((img, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      onClick={() => setLightbox(i)}
                      className={`overflow-hidden cursor-pointer group ${
                        i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                      }`}
                    >
    
                      <div
                      style={{backgroundImage:`URL(${img.image})`}}
                        alt={`Clinic interior ${i + 1}`}
                        className={`flex flex-col items-center px-9 justify-center bg-cover bg-center object-cover transition-transform duration-500 ${
                          i === 0 ? 'h-full min-h-[350px] md:h-[650px] lg:h-[750px] ' : 'h-full min-h-[300px] '
                        }`}
                      >
        
                         <ul className='hidden group-hover:flex flex-col gap-2  whitespace-nowrap text-white text-sm lg:text-lg'>
                        {img.subcategories.map((subcategory, index) => (
                              <li key={index} className='flex items-center gap-2'> 
                   <Check strokeWidth={5} className="w-5 h-5 text-[green] font-bold shrink-0" />
                  <span>{subcategory}</span>
                  </li>
                            ))}

              </ul>    </div>
                    </motion.button>
                  ))}
                </div>
      </div>
    </section>
  );
}