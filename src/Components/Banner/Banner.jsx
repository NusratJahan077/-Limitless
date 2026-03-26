import React from 'react';

const Banner = () => {
  return (

<div className="hero min-h-[545px] relative">
  
  {/* Overlay layer */}
  <div className="absolute inset-0 bg-black px-[]140px"></div>

  {/* Background image layer */}
  <div className="absolute inset-0">
    <img 
      src="/src/assets/bg-shadow.png" 
      alt="banner background" 
      className="w-full h-[545px] object-cover " 
    />
  </div>
     
  {/* Content layer */}
  <div className="relative z-10 text-center text-white">
    Banner Content
  </div>
</div>

    
  );
};

export default Banner;

