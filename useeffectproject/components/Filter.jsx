import React from "react";
import { filterData } from "../src/Data";
const Filter = ({filterData}) => {
    return(
        <div>
            {filterData.map((data) => {
                 return <button>{data.title}</button>
            })}
        </div>
    )
}
export default Filter