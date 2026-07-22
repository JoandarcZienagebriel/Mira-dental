import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import DentistsSection from '@/components/home/DentistsSection';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import ReviewsSection from '@/components/home/ReviewsSection';
import BeforeAfter from '@/components/home/BASection';
import ServiceList from '@/components/home/ServiceList';
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceList/>
       <AboutPreview />
      <DentistsSection />
     <BeforeAfter/>
      <ReviewsSection />
    </div>
  );
}