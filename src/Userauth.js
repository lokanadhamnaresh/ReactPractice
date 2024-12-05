import React, { useState } from "react";
import { authlogin } from "./Firebaseauth";
function Userauth(){
    const[data, setData]= useState({
        email:"",
        password: ""

    });
    const{email, password} = data;
    const changeHandler = e =>{
        setData({...data, [e.target.name]:e.target.value});
    }
    const signIn = e => {
        e.preventDefault();
        authlogin.createUserWithEmailAndPassword(email,password)
        .then(user => console.log(user))
        .catch(err=>console.log(err));
    }
    const signUp = e => {
        e.preventDefault();
    }
 return(
    <div>
        <center>
            <form autoComplete="off" onSubmit={onsubmit()}>
                <h1>Authentication</h1>
                <input type="email" name="email" value="{email}" placeholder="Email" onChange={changeHandler}/><br/>
                <input type="password" name="password" value="{password}" placeholder="Password" onChange={changeHandler}/><br/>
                <button type="submit" onClick={signIn}>Sign In</button> <button type="submit" onClick={signUp}>Sign Up</button>
            </form>
        </center>
    </div>
 );
}
export default Userauth;