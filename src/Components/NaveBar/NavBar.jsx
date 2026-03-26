import React from 'react';

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm  ">
        
  <div className="flex-1 pl-32">
    <a ><img src="/src/assets/logo.png" alt="" /></a>
  </div>

  <nav>
    <ul className='flex'>
      <li className='mr-10'><a href=""></a>Home</li>
      <li className='mr-10'><a href=""></a>Teams</li>
      <li className='mr-10'><a href=""></a>Schedules</li>
      <li className='mr-10'><a href=""></a>Fixture</li>
    </ul>
  </nav>

  <div className="flex-none">
    <button className="  flex justify-between items-center gap-2  font-bold text-xl pr-32">
    0 Coins
    <img src="/src/assets/Currency.png" alt="" />
    </button>
  </div>
</div>
    </div>
  );
};

export default NavBar;