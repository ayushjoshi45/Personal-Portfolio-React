/**
 * Loading Component
 */

import React from 'react';

const Loading = ({ size = 'medium', text = '' }) => {
  const sizes = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`${sizes[size]} border-4 border-[#333333] border-t-[#6200EE] rounded-full animate-spin`}></div>
      {text && <p className="text-gray-400">{text}</p>}
    </div>
  );
};

export default Loading;
