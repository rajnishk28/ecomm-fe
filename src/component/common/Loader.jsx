import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-blue-500 opacity-75 animate-ping"></div>
        <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-blue-500 animate-spin"></div>
        <div className="absolute inset-0 w-12 h-12 m-auto rounded-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Loader;
