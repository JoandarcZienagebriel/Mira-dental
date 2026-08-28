import { IMAGES } from './images';
import diagnostic from '../assets/img/4.avif';
import whitening from '../assets/img/m.avif';
import pedi from '../assets/img/child.avif';
import implant from '../assets/img/implant.avif';
import align from '../assets/img/align.avif';
import one from '../assets/img/1.jpg';
import due from '../assets/img/2.avif';
import tre from '../assets/img/9.jpg';
import five from '../assets/img/5.webp'
import four from '../assets/img/tre.jpg';
import restorative from '../assets/img/restorative.avif';
import veneer from '../assets/img/veneer.avif';
import us from '../assets/img/us.avif';
import six from '../assets/img/3.jpg';
import seven from '../assets/img/4.jpg';
export const SERVICES = [
  {
    title: 'Check-Up & Cleaning',
    description: 'Keep your teeth and gums healthy with regular check-ups, professional cleaning and prevention.',
    image: diagnostic,
  },
  {
    title: 'Fix a Damaged Tooth',
    description: 'Repair teeth that are broken, cracked, worn or affected by decay.',
    
    image: whitening,
  },
 
   {
    title: 'Improve My Smile',
    description: 'Enhance the appearance of your smile with veneers, bonding, whitening, orthodontics and more.',
    image: align,
  },

  {
    title: 'Replace Missing Teeth',
    description: 'Permanent, natural-looking dental implants to replace missing teeth and restore your smile. We also offer dentures and dental bridges as alternatives, with personalized consultations to find the best solution for you.',
    image: implant,
  },

{
title:'Gum Problems',
description:'Get treatment for bleeding, swollen, sore or receding gums and other gum problems.',
image: one,
},
  {
    title: 'Paediatric & Emergency Dental Care',
    description: 'Gentle, child-friendly dental care including first visits, cavity prevention, and sealants. We also provide emergency dental services for urgent issues like severe toothaches, broken teeth, and dental trauma.',
    image: pedi,
  },
];
export const SERVICES_SUMMARY = [
    {image: us,
    title: 'Preventive Dentistry',
    subcategories:['Oral Examination & Diagnosis', 'Professional Cleaning', 'Fluoride Treatments', 'Oral Hygiene Education'], 
  },
   {image: veneer,
    title: 'Cosmetic Dentistry',
    subcategories:['Veneers', 'Cosmetic Bonding', 'Smile Makeovers', 'Orthodontics', 'Full Mouth Rehabilitation '],
  },
   {
    image: restorative,
    title: 'Restorative Dentistry',
    subcategories:['Root Canal Treatment', 'Tooth Extractions', 'Dentures', 'Dental Implants', 'Periodontal Treatment'],
  },
    
  ];
export const BEFORE = [
   {
     image: six,
  },
{
     image: seven,
  },

  {
     image: due,
  },
  {
     image: tre,
  },
  {
     image: five,
  },
  {
     image: one,
  },
  {
     image: four,
  },
 
 
]
export const PROCEDURE = [
    {
    title: 'Step One: Get in touch',
   description:'Start your journey by contacting our dental clinic. Our friendly team will listen to your needs, answer your questions and help you take the first step towards a healthier smile.'},
   {
    title: 'Step Two: Visit our clinic',
    description:'Come in and meet our team in a comfortable, welcoming environment. We’ll make sure you feel relaxed and at ease from the moment you arrive.'
  },
   {
    title: 'Step Three: Meet your dentist',
    description:'Your dentist will take the time to understand your concerns, assess your dental health and explain any recommended treatment options clearly.'},
  {
    title: 'Step Four: Begin your treatment',
    description:'Once you’re happy with your treatment plan, we’ll schedule your appointment and guide you through every step towards a healthy, confident smile.'
  },
    
  ];