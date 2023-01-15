import * as React from 'react'
import bcrypt from "bcryptjs-react";
import db from '../../data/users.json'
import User from '../../models/User'

function Login() {

    const [userName, setUserName] = React.useState("")
    const [userPassword, setUserPassword] = React.useState("")

    function verifySession(event: React.SyntheticEvent<HTMLFormElement>) {
        let userLogin: User
        db.forEach((item) => {
            let salt = bcrypt.genSaltSync(12);
            let passwordEncript = bcrypt.hashSync(userPassword, salt)
            let passwordComparete = bcrypt.compareSync(userPassword, passwordEncript)
            if (item.name === userName && passwordComparete) {
                userLogin = { name: userName, type: item.type }
                console.log(userLogin);
            }
            window.sessionStorage.setItem("userLogged", JSON.stringify(userLogin ? userLogin : undefined))
        })
    }

    return (
        <div className='main-login'>
            <div className='login-content' >
                <h1>Login</h1>
                <form className='content-login' onSubmit={(e) => { verifySession(e) }}>
                    <label htmlFor="usernameInput">
                        Username
                        <input
                            id="usernameInput"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            type="text"
                            placeholder="name"
                            className="input"
                            required
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
                            placeholder="password"
                            className="input"
                            required
                        />
                    </label>
                    <button className='buttton buttton-login' type='submit'>Send</button>
                </form>
            </div>
        </div>
    )


}

export default Login