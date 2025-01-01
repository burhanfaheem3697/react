
import ItemForm from './ItemForm'
import './NewItem.css'

function NewItem(props){
    function B(obj){
        props.onchangeA(obj)
    }
    return(
        <div>
           <ItemForm onChangeB = {B}></ItemForm>
        </div>
    )
}

export default NewItem