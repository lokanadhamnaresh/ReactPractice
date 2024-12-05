// import User from "./User";
import React from "react";
// import Memo from "./Memo";
// import Apiintegration from "./Apiintegration";
// import ReducerCounter from "./ReducerCounter";
// import Myparentusecallback from "./Myparentusecallback";
// import Userauth from "./Userauth";
import Weather from "./weather";

function App() {
  // let arr = [
  //   {
  //     id:23,
  //     name:'Naresh',
  //     place:'VSKP',
  //   },
  //   {
  //     id:233,
  //     name:'Suresh',
  //     place:'HYD',
  //   },
  //   {
  //     id:255,
  //     name:'Ramesh',
  //     place:'VJWD',
  //   },
  // ]
  return (
    <div className="App">
      {/* {
        arr.map(
          (u)=>{
            return <User key={u.id} id={u.id} name={u.name} place={u.place}/>
          }
        )
      }
      <User/> */}
      {/* <Memo/> */}
      {/* <Apiintegration/> */}
      {/* <h1>useCallback Examples</h1> */}
      {/* <ReducerCounter/> */}
      {/* <Myparentusecallback></Myparentusecallback> */}
      {/* <Userauth/> */}
      <Weather/>
    </div>
  );
}

export default App;
