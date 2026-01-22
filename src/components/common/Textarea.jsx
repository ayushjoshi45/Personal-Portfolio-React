/**
 * Reusable Textarea Component
 */

import React from 'react';

const Textarea = ({ 
  name,
  id,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  rows = 4,
  className = '',
  ...props 
}) => {
  const baseClasses = 'p-3 rounded-md bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6200EE] w-full transition-all resize-vertical';
  const errorClasses = error ? 'ring-2 ring-red-500' : '';

  return (
    <div className="w-full">
      <textarea
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`${baseClasses} ${errorClasses} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;
