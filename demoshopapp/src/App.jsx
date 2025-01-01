import { Component, useState } from 'react'
import './App.css'
import Item from '../components/Item'
import ItemDate from '../components/ItemDate'
import Card from '../components/Card'
import NewItem from '../components/NewItem'
function App() {
  const [count, setCount] = useState(0)
  const response = [
    {
      itemName: "Nirma",
      date: "20",
      month: "july",
      year: "2023"
    },
    {
      itemName: "Surf Excel",
      date: "13",
      month: "august",
      year: "2923"
    },
    {
      itemName: "555",
      date: "19",
      month: "sept",
      year: "1919"
    },
  ]
  function A(obj){
    console.log(obj)
  }

  return (

    <div className='wrapper'>

      <Card>
        <ItemDate date={response[0].date} month={response[0].month} year={response[0].year}></ItemDate>
        <Item name={response[0].itemName}></Item>
      </Card>
      <Card>
        <ItemDate date={response[1].date} month={response[1].month} year={response[1].year}></ItemDate>
        <Item name={response[1].itemName}></Item>

      </Card>
      <Card>

        <ItemDate date={response[2].date} month={response[2].month} year={response[2].year}></ItemDate>
        <Item name={response[2].itemName} ></Item>
      </Card>
    <NewItem onchangeA = {A}></NewItem>

    </div>


  )
}

export default App
