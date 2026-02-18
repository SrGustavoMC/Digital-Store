import React from 'react';

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="mb-8">
      <h3 className="font-bold text-dark-gray-2 text-sm mb-4">{title}</h3>
      <div className="flex flex-col gap-3">
        {options.map((opt, index) => (
          <label key={index} className="flex items-center gap-3 cursor-pointer group">
            <input 
              type={inputType} 
              name={title} // Para agrupar os radios corretamente
              className="w-5 h-5 accent-primary border-gray-300 rounded focus:ring-primary" 
            />
            <span className="text-dark-gray-2 text-sm group-hover:text-primary transition">
              {opt.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;