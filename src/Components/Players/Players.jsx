import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise}) => {
  console.log(playersPromise);

  const players =use(playersPromise);
  console.log(players);

  const[selectedType ,setselectedType] =useState("available");
  console.log(selectedType ,"selectedType")
  
  return (
    <div className='container mx-auto mt-20'>
      <div className='flex justify-between  items-center'>
          {selectedType === "available" ? <h2 className='font-bold text-3xl'> Available Players</h2> :<h2 className='font-bold text-3xl'> Selected Players(2/6)</h2>}
    
        <div className='flex '>
             <button
             onClick={()=> setselectedType("available")}
             className={`btn ${selectedType === 'available' ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-l-xl`}>Available</button>

             <button 
              onClick={()=> setselectedType("Selected")}
             className={`btn ${selectedType === 'available' ? "" : "bg-[#E7FE29]"}  rounded-l-none rounded-r-xl`}>Selected (0)
             </button>

             
        </div>
    </div>

   {selectedType === "available" ?(<AvailablePlayers players ={players} />)  : ( <SelectedPlayers />)}
      
{/* card jonno */}
      </div>
  );
};

export default Players;