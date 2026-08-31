import { IMAGES } from './images';
import pedi from '../assets/img/s6.jpg';
import implant from '../assets/img/implant.avif';
import one from '../assets/img/s1.avif';
import due from '../assets/img/2.avif';
import tre from '../assets/img/9.jpg';
import five from '../assets/img/5.avif'
import four from '../assets/img/tre.jpg';
import restorative from '../assets/img/restorative.avif';
import veneer from '../assets/img/veneer.avif';
import us from '../assets/img/us.avif';
import six from '../assets/img/3.jpg';
import seven from '../assets/img/4.jpg';
import braces from '../assets/img/braces.avif';
import toothache from '../assets/img/toothache.avif';
import check from '../assets/img/check.avif';
import eight from '../assets/img/1.avif';
export const SERVICES = [
  {
    title: 'Check-Up & Cleaning',
    description: 'Regular check-ups help us find dental problems early and keep your teeth and gums healthy. Our professional cleaning removes plaque and buildup, while we also give you simple advice to care for your teeth at home.',
  image: check,
  },
  {
    title: 'Fix a Damaged Tooth',
    description: 'Broken, cracked, worn or decayed teeth can affect your comfort and your smile. We provide treatment to repair and protect damaged teeth. Depending on your needs, treatment may include fillings, crowns or other options to restore the tooth and help you use it normally again. ',
    
    image: toothache,
  },
 
   {
    title: 'Improve My Smile',
    description: 'If you want to feel more confident about your smile, we offer a range of cosmetic dental treatments. These include whitening, veneers, bonding and orthodontics, with options chosen to suit your smile and your needs. ',
    image: braces,
  },

  {
    title: 'Replace Missing Teeth',
    description: 'Missing teeth can make eating, speaking and smiling more difficult. We offer dental implants, bridges and dentures to replace missing teeth. We will discuss your options with you and help find a solution that looks natural, feels comfortable and works for you.',
    image: implant,
  },

{
title:'Gum Problems',
description:'Bleeding, swollen, sore or receding gums can be signs of gum problems that should not be ignored. We can check the cause and provide the right treatment to improve your gum health and prevent the problem from getting worse.',
image: one,
},
  {
    title: 'Paediatric & Emergency Dental Care',
    description: 'We provide gentle and friendly dental care for children, including first visits, check-ups, cavity prevention and sealants. For urgent problems, we also offer emergency dental care for severe toothaches, broken teeth and dental injuries, helping you get the care you need quickly.',
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
     image: eight
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