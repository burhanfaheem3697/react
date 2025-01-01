import { useState } from 'react'
import './App.css'
import Data from './Data'
import Tours from '../components/Tours'
function App() {
  const [tours,setTours] = useState(Data)
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id!==id)
    setTours(newTours)
  }
  if(tours.length === 0) return (
    <div className='Refresh'>
      <h1>No tours left</h1>
      <button className='btn-white' onClick={() => setTours(Data)}>Refresh</button>
    </div>
  )
  return (
   <div>
   
    <Tours className = 'App' tours = {tours} removeTour = {removeTour}></Tours>
   </div>
  )
}

export default App
