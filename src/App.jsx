
import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NaveBar/NavBar'
import Players from './Components/Players/Players';



const fetchPlayer =async() =>{
  const res =await fetch("/data.json");
  return res.json();

}
function App() {
  const playersPromise =fetchPlayer();

  return (
    <>
     
    <NavBar></NavBar>
    <Banner></Banner>

  <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
     <Players playersPromise = {playersPromise} />
  </Suspense>

 

    </>
  )
}

export default App

