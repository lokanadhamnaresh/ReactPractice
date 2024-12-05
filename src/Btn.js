import React, {memo} from "react";
function Btn(props) {
    console.log("button component Running..!");
    return(
        <div>
            <button onClick={props.handleClick} > {props.children} </button>
        </div>
    )
}
export default memo(Btn);