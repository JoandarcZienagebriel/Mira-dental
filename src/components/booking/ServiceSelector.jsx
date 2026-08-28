import React from 'react';
import { SERVICES } from '@/lib/servicesData';

export default function ServiceSelector({ value, onChange }) {
  return (
    <div>
      <label className="block text-md xl:text-lg font-semibold text-[#0F1A20] mb-5">Select a Service</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
        {SERVICES.map((s) => (
          <button
            key={s.title}
            type="button"
            onClick={() => onChange(s.title)}
            className={`text-center p-3 rounded-[6rem] border transition-all text-sm xl:text-[1.1rem] ${
              value === s.title
                ? 'border-accent bg-accent text-[#fff]'
                : 'border-[0F1A20] text-[#273138] hover:border-accent hover:bg-card'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>
    </div>
  );
}