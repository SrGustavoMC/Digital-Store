import React from 'react';
import { Link } from 'react-router-dom';

const Information = ({ title, informations }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6 text-white">{title}</h3>
      <ul className="space-y-3 text-sm">
        {informations.map((info, index) => (
          <li key={index}>
            <Link to={info.link} className="text-white hover:text-primary transition">
              {info.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Information;