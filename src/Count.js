import React from "react";
function Count(props) {
    console.log("Count component Running..!");
    return(
        <div>
            <h1>{props.text} is {props.count}</h1>
        </div>
    )
}
export default Count;