import * as React from 'react'
import db from '../../data/users.json'
import User from '../../models/User'
// import fs from 'fs'

function Login(){

    const [userName, setUserName] = React.useState("")
    const [userPassword, setUserPassword] = React.useState("")

    function verifySession(event:React.SyntheticEvent<HTMLFormElement>){
        let userLogin: User
        db.forEach((item)=>{
            if(item.name === userName && item.passWord === userPassword){
                userLogin = {name:userName, password:userPassword}
                console.log(userLogin);
            }
            window.sessionStorage.setItem("userLogged", JSON.stringify(userLogin)) 
        })
    }

    console.log(window.sessionStorage.getItem("userLogged"))
    

    return(
        <>
            <form onSubmit={(e)=>{verifySession(e)}}>
                <label htmlFor="usernameInput">
                    Username
                    <input
                    id="usernameInput"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="name"
                    className="input"
                    />
                </label>
                <br></br>
                <label htmlFor="userpasswordInput">
                    Password
                    <input
                    id="userpasswordInput"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    type="password"
                    placeholder="name"
                    className="input"
                    />
                </label>
                <button type='submit'>Send</button>
            </form>
        </>
    )

    
}

export default Login