

import { useState } from 'react';
import './Item.css'

function Item(props){
    let [name,setName] = useState(props.name)
    function clickHandler(){
        name = "popcorn";
        setName(name);
        console.log("button clicked");
    }
    return (
<>
<div className="Nirma">{name}</div>
<button onClick={clickHandler}>Add to Cart</button>
</>
    )
}
 
export default Item