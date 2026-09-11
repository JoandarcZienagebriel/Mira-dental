import { useState, useEffect, useRef } from 'react';
import HeroSection from '@/components/home/HeroSection';
import DentistsSection from '@/components/home/DentistsSection';
import AboutUs from '../components/home/AboutUs';
import BeforeAfter from '../pages/beforeafter';
import LocationSection from '../pages/LocationSection';
import Procedure from '../components/home/Procedure.jsx';
export default function Home() {

const serviceRef = useRef(null);
const aboutRef = useRef(null);
const aboutRef1 = useRef(null)
const logoRef = useRef(null);
  return (
    <div className='bg-[#f6fff8]'>
      <HeroSection />
     <DentistsSection triggerRef={logoRef} serviceRef={serviceRef} />
       <AboutUs triggerRef={serviceRef}/>
  <BeforeAfter/>
  <Procedure/>
   <LocationSection/>
    </div>
  );
}