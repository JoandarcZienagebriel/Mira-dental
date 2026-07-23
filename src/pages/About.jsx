 import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { IMAGES } from '@/lib/images';
import aboutbg from '../assets/img/aboutbg.avif';
import { ABOUT_SLIDER } from '@/lib/images';

export default function About() {
  const [lightbox, setLightbox] = useState(null);
   const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % ABOUT_SLIDER.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + ABOUT_SLIDER.length) % ABOUT_SLIDER.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = ABOUT_SLIDER[current];

  return (
    <div>
      {/* Clinic Story */}
      <section className="relative py-16 md:py-24 bg-center bg-cover bg-no-repeat" style={{backgroundImage:`url(${aboutbg})`}}>
        <div className='absolute inset-0 object-cover bg-[#000]/20'/>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-[#000] font-semibold tracking-widest uppercase mb-3">Our Story</p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-semibold text-[#132a13] mb-8 leading-tight">
              Where It All Began
            </h1>
            <div className="space-y-5 leading-relaxed text-base md:text-md xl:text-lg">
              <p className=''>
                Dental Clinic was born from a simple yet profound belief: that quality dental care should be accessible and transformative. In 2018, what started as a modest practice on Rwanda Street in the heart of Addis Ababa has since grown into one of the city's most trusted dental clinics.
              </p>
              <p>
                Our founders envisioned a space where patients would feel genuinely cared for — where the latest dental technology meets a warm, human approach. From our very first patient, we made a promise: to treat every smile as if it were our own.
              </p>
              <p>
                Today, Dental serves hundreds of families across Addis Ababa, from children experiencing their first dental visit to adults seeking life-changing cosmetic procedures. Our growth has been organic, driven entirely by the trust our patients place in us and the referrals they share with loved ones.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doctors Story */}
      <section className="py-16 md:py-24 bg-[#b3d89c]/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-[#4f772d] text-sm font-semibold tracking-widest uppercase mb-3">Our Doctors</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#132a13]">
              The People Behind Your Smile
            </h2>
          </motion.div>

          <div className="space-y-16">
            {/* Dr. Abebe */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
            >
              <div className="overflow-hidden aspect-[3/4] max-h-100">
                <img src={IMAGES.dentist2} alt="Dr. Selam Bekele" className="w-full h-full object-cover rounded-t-full border-4 border-[#4f772d]"  />
              </div>
              <div className="md:order-1">
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#353238] mb-2">Dr. Mira</h3>
                <p className="text-[#4f772d] font-medium text-sm mb-5">Lead Dentist & Founder</p>
                <div className="space-y-4 text-[#273138] text-md leading-relaxed">
                  <p>
                    Dr. Mira discovered her calling in cosmetic dentistry while studying at the University of Addis Abeba, where she was captivated by the intersection of art and science. She went on to specialize in aesthetic dentistry and orthodontics.
                  </p>
                  <p>
                    With an artist's eye and a surgeon's precision, Dr. Mira has transformed countless smiles through veneers, whitening, and alignment treatments. Her gentle approach puts even the most anxious patients at ease.
                  </p>
                  
                </div>
              </div>
            </motion.div>

            {/* Dr. Selam */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
            >
              <div className="overflow-hidden rounded-lg aspect-[3/4] max-h-100 md:order-2">
                <img src={IMAGES.dentist1} alt="Dr. Abebe Tadesse" className="w-full h-full object-cover rounded-t-full border-4 border-[#4f772d]" />
              </div>
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#353238] mb-2">Dr. Thomas</h3>
                <p className="text-[#4f772d] font-medium text-sm mb-5">Cosmetic Specialist</p>
                <div className="space-y-4 text-[#273138] text-md leading-relaxed">
                  <p>
                    Dr. Thomas's journey into dentistry began during his childhood in Addis Ababa, where he watched his grandmother struggle with dental pain due to limited access to care. That experience ignited a lifelong passion to make quality dentistry accessible to his community.
                  </p>
                  <p>
                    After graduating with honors from Addis Ababa University's School of Dentistry, Dr. Thomas spent three years training in advanced restorative and implant dentistry. He co-founded Mira Dental with a vision to bring world-class dental care to Ethiopia.
                  </p>
               
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
    <section
  
            fetchpriority="high" style={{backgroundImage:`url(${slide.image})`}}
      className="relative h-screen w-full bg-center bg-cover over bg-norepeat flow-hidden" 
      aria-label="Hero"
      aria-roledescription="carousel"
    >
        <div className='absolute inset-0 object-cover bg-[#000]/30'/>

        
      <div className='relative z-100 max-w-4xl pt-64 pl-4 text-[#fff] md:pr-[15rem] lg:pr-[20rem] xl:pr-[23rem]'>
        <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .4 }}
     
        >
         
        </motion.div>
      </AnimatePresence>
  <h2 className="font-heading pb-4 text-3xl md:text-4xl font-semibold text-black">
              Our Work Place
            </h2>
                       <p className='text-base md:text-md xl:text-lg lg:leading-[1.5rem] lg:leading-[2rem]'>
               Clean lines, calming colors, durable materials, and efficient layouts work together to enhance the patient experience while supporting safe and seamless clinical operations.
                       </p>
                    
            </div>
             
</section>

    
    </div>
  );
}