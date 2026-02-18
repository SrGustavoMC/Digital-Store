import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-5">
        <h2 className={`text-dark-gray-2 text-2xl font-bold ${titleAlign === 'center' ? 'w-full text-center' : ''}`}>
          {title}
        </h2>
        {link && (
          <Link to={link.href} className="text-primary font-bold hover:underline flex items-center gap-2">
            {link.text} 
            <span className="text-xl">→</span>
          </Link>
        )}
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;