import { useEffect, useState } from 'react'

import './App.css'
import Navbar from '../components/Navbar'
import {apiUrl,filterData} from './Data'
import Filter from '../components/Filter'
import Cards from '../components/Cards'
import {toast} from 'react-toastify'
function App() {
  const [courses,setcourses] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl)
        const output = await res.json()
        setcourses(output.data)
      }
      catch(error){
        toast.error("something went wrong")
      }
    }
    fetchData()
  },[])
 
  return (
    <div>
      <Navbar></Navbar>
      <Filter filterData = {filterData}></Filter>
      <Cards courses = {courses}></Cards>
    </div>
  )
}

export default App
