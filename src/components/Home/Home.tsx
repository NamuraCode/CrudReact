import ProductsUsers from '../ItemsUsers/ItemsUsers'
import Login from '../Login/Login'
import { useEffect } from 'react';

function Home(){
    let sessionUser = window.sessionStorage.getItem("userLogged")
    useEffect(()=>{
        sessionUser =  window.sessionStorage.getItem("userLogged")
    },[sessionUser])

    console.log(sessionUser);
    
    return(
        <>
            <ProductsUsers/>
            { sessionUser ? null : <Login/>} 
        </>
    )
}

export default Home