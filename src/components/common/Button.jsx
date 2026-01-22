/**
 * Reusable Button Component
 */

import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded-full transition-all duration-300 font-medium';
  
  const variants = {
    primary: 'bg-[#6200EE] text-white hover:bg-[#7B1EFF] hover:scale-105',
    secondary: 'bg-[#222222] text-white hover:bg-[#333333]',
    outline: 'border-2 border-[#6200EE] text-[#6200EE] hover:bg-[#6200EE] hover:text-white',
  };

  const disabledClasses = 'disabled:bg-gray-500 disabled:cursor-not-allowed disabled:hover:scale-100';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
