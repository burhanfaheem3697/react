import './ItemDate.css'

function ItemDate(props){
    const date = 20;
    const month = 'June'
    const year = 2023
    return (
        <div className='itemdate'>
            <span>{props.date} </span><span>{props.month} </span><span>{props.year} </span>
        </div>
    )
}
export default ItemDate