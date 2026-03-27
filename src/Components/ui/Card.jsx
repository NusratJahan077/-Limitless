import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";


const Card = ({player}) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
            src={player.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
         <FaUser /> {player.playerName}</h2>
         <div className='flex justify-between  gap-2  items-center'>
           <div className='flex gap-2 items-center'>
            <FaFlag />
           <p>{player.country}</p>
           </div>
           <button className='btn'>{player.playerType}</button>
         </div>
          <div className="divider"></div>
          <h2 className='font-bold'>Rating({player.rating})</h2>
      
          <div className='flex justify-between gap-4 '>
            <p>{player.battingStyle}</p>
            <p className='text-right'>{player.bowlingStyle}</p>
          </div>
      
        <div className='card-acvtion justify-between flex items-center'>
          <p className='font-semibold'>Price: ${player.price}</p>
            <button className="btn ">Buy Now</button>
          </div>
      
        </div>
        
        </div>
    </div>
  );
};

export default Card;