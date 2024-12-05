import React, {memo} from "react";
function Title() {
    console.log("title component Running..!");
    return(
        <div>
            <h1>
                Usecallback Example
            </h1>
        </div>
    )
}
export default memo(Title);