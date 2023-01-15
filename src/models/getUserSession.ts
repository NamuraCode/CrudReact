import userInterface from './User'

let sessionUser = window.sessionStorage.getItem("userLogged")
let defaultUser:userInterface = {
    name:"User",
    type:"user"
}
let userObject: userInterface = JSON.parse(sessionUser ? sessionUser : JSON.stringify(defaultUser))

export default userObject