import React from 'react'
import RectDOM from 'react-dom'
function Forms(props) {
    return(
        <div>
        <h2 className="forms">{props.name}:
            <input type='{props.name}' name={props.name}></input>
        </h2>
        </div>
    )
}
export default Forms