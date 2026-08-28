import { useState, useEffect, useRef } from 'react';
import HeroSection from '@/components/home/HeroSection';
import DentistsSection from '@/components/home/DentistsSection';
import AboutUs from '../components/home/AboutUs';
import ServicesPreview from '@/components/home/ServicesPreview';
import ReviewsSection from '@/components/home/ReviewsSection';
import BeforeAfter from '@/components/home/BASection';
import ServiceList from '@/components/home/ServiceList';
import LocationSection from '../pages/LocationSection';
import Clinic from '../components/home/clinic.jsx';
import DentistTwo from '../components/home/Dentisttwo';
import Procedure from '../components/home/Procedure.jsx';
export default function Home() {

const serviceRef = useRef(null);
const aboutRef = useRef(null);
const aboutRef1 = useRef(null)
  return (
    <div>
      <HeroSection />
     <DentistsSection serviceRef={serviceRef} />
       <AboutUs/>
  <BeforeAfter/>
  <Procedure/>
   <LocationSection/>
    </div>
  );
}