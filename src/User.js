import React, { useState } from "react";
function User(props){
    //console.log(props);
    //props.name= 'Rajesh';
    // eslint-disable-next-line no-unused-vars
    let [counter, setCounter] = useState(0);
    // function increaseValue(){
    //     counter++;
    //     return counter++;
    //    }
    return(
        <div>
            {/* <table className="table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Place</th>
                </tr>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.place}</td>
                </tr>
            </table> */}
            
            <h1>Count Increase:{counter}</h1>            
            <button onClick = {() => setCounter(counter++) }>Click</button>
            
        </div>
    )
}
export default User;

// import React from "react"
// class User extends React.Component{
//     // constructor(props){

//     // }
//     render(){
//         return(
//             <div>
//             <h1> Name: {this.props.name}</h1>
//             <h1> Age: {this.props.age}</h1>
//             </div>
//         )   
//      }
// }
// export default User;