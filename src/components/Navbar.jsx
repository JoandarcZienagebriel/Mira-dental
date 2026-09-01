import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { IMAGES } from '@/lib/images';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const NAV_ITEMS = [
   { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Location', path: '/location' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (menuRef.current?.contains(e.target)) return;
      if (btnRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [open]);

gsap.registerPlugin(ScrollTrigger)
useEffect(()=>{
 const trigger = ScrollTrigger.create({
  trigger:'.nav',
  start:'top 10%',
  toggleClass: { targets:'nav',className:'nav-items' },
 });
 return()=>{
  trigger.kill();
 };
},[])

  return (

     <header className="fixed top-0 left-0 right-0 z-50 w-screen md:pb-2 bg-primary ">
      {/* Desktop top bar */}
      <div className='nav' >
        <p className='flex flex-col justify-center items-center gap-2 py-2 text-[.8rem] text-white md:flex-row  bg-card'>
          Call us if you have any questions:
          <a
          href="tel:09336495034"
          className="flex items-center gap-2 md:text-sm xl:text-[1rem] font-medium text-white transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
        +251 936495034
        </a>
        </p>
        </div>
     

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto px-6 md:px-1 md:mx-[10px] h-16 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {/* Mobile hamburger */}
          <button
            ref={btnRef}
            onClick={() => setOpen(!open)}
            className="md:hidden p-0 -ml-2 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link to="/" className="flex items-center gap-1">
           
            <span className="font-logo text-base whitespace-nowrap pr-4 md:text-2xl lg:text-4xl font-semibold text-[white]">
              <a href='/'>Mira Dental Clinic</a>
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex justify-center items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[1rem] text-white transition-colors font-medium lg:text-[1rem] hover:border-b-2 hover:border-accent visited:text-card ${
                location.pathname === item.path ? 'text-[#1E3A8A]' : 'text-[#0F1A20]'
              }`}
            >
              {item.label}
            </Link>
          ))}
           <Link
          to="/booking"
          className="border border-surface rounded-[6rem] bg-surface text-[#000] px-6 py-2.5 md:px-4 py-3 lg:px-6 py-3 md:text-sm xl:text-[1rem] font-medium hover:bg-accent hover:text-[#fff] hover:rounded-3xl transition-colors"
        >
          Schedule Online
        </Link>
        </div>

        {/* Mobile phone + book */}
        <div className="flex md:hidden items-center gap-1">
        
          <Link
            to="/booking"
            className="border border-primary whitespace-nowrap rounded-[6rem] bg-surface text-[#000] px-2.5 py-3 text-xs font-semibold"
          >
          Schedule Online
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-[#FAF9F7] border-b border-[#DDD6CE] shadow-lg"
        >
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-card text-[#fff]'
                    : 'text-[#0F1A20] hover:bg-card hover:border-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
           
          </div>
        </div>
      )}
    </header>

  );
}