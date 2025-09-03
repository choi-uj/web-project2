// CircularBtn.jsx
import React from 'react';
import './CircularBtn.scss';

const CircularBtn = ({ text = "SEOUL GARDENING CLUB", repeat = 3, as = 'div', href = '#' }) => {
  const repeatedText = Array(repeat).fill(`${text} • `).join('');
  const Tag = as; // div, a, button 등

  return (
    <Tag className="round-btn" {...(as === 'a' ? { href } : {})}>
      <svg viewBox="0 0 200 200" className="circular-text">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text>
            <textPath href="#circlePath" startOffset="0%">
                SEOUL GARDENING CLUB • SEOUL GARDENING CLUB •
            </textPath>
        </text>
      </svg>
      <span className="btn-label">{text}</span>
    </Tag>
  );
};

export default CircularBtn;
