import restore from '../assets/img/restorative.avif';
import general from '../assets/img/general.avif';
import veneer from '../assets/img/veneer.avif';
import sei from '../assets/img/aboutbg.avif';
import nove from '../assets/img/nove.avif';
import check from '../assets/img/checkup.avif';

export const IMAGES = {
  
  hero: {
 root:'https://media.base44.com/images/public/6a3abba0b638fbcdb7679bb9/52631ed5a_4.avif',
    gum:'https://media.base44.com/images/public/6a3abba0b638fbcdb7679bb9/011a930ad_3.png',
    
  },
  clinicInterior: 'https://media.base44.com/images/public/6a3abba0b638fbcdb7679bb9/28667f33a_generated_cbc394e9.png',
  teethWhitening: 'https://media.base44.com/images/public/6a3abba0b638fbcdb7679bb9/9e527115f_generated_f662da64.png',
  
   gallery: [
    {image: general,
    title: 'Preventive Dentistry',
    subcategories:['Oral Examination & Diagnosis', 'Professional Cleaning', 'Fluoride Treatments', 'Oral Hygiene Education'], 
  },
   {image: veneer,
    title: 'Cosmetic Dentistry',
    subcategories:['Veneers', 'Cosmetic Bonding', 'Smile Makeovers', 'Orthodontics', 'Full Mouth Rehabilitation '],
  },
   {
    image: restore,
    title: 'Restorative Dentistry',
    subcategories:['Root Canal Treatment', 'Tooth Extractions', 'Dentures', 'Dental Implants', 'Periodontal Treatment'],
  },
    
   ]
};
export const ABOUT_SLIDER =[
 
   {image: sei,
     },
   {
    image: nove,
   },
    
]
export const HERO_SLIDES = [
 
   {
    image: check,
    
  },
   
];