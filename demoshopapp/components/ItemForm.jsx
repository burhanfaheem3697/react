import { useState } from 'react'
import './ItemForm.css'

function ItemForm(props){
    const [newTitle,setTitle] = useState('')
    const [newDate,setDate] = useState('')
    function TitlechangeHandler(e){
        setTitle(e.target.value)
    }
    function datechangeHandler(e){
        setDate(e.target.value);
    }
    function submitHandler(e){
        e.preventDefault();
        const obj = {
            title: newTitle,
            date : newDate
        }
        console.log(obj);
        C()
    }
    function C(){
        const obj = {title : 'helloworld', number: "234232"};
        props.onChangeB(obj)
        
    }
    return (
        <form action="" onSubmit={submitHandler}>
            <div className='newitem_title'>


            <label >Title</label>
            <input type = "text" onChange={TitlechangeHandler}></input>
            </div>
            <div className='newitem_date'>

            <label>Date</label>
            <input type="date" onChange={datechangeHandler}/>
            </div>
            <div className='newitem_button'>
                <button type = "submit">Add product </button>
            </div>
        </form>
    )
}

export default ItemForm