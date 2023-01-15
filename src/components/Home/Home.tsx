import Login from '../Login/Login'
import { useEffect } from 'react';
import ProductsUsers from '../ItemsUsers/ItemsUsers'
import Profile from '../Profile/Profile'
import Header from '../../utils/Header/Header';

function Home(){
    let sessionUser = window.sessionStorage.getItem("userLogged")
    useEffect(()=>{
        sessionUser =  window.sessionStorage.getItem("userLogged")
    },[sessionUser])

    console.log(sessionUser);
    
    return(
        <div className='main-home'>
            <Header/>
            <ProductsUsers/>
            { sessionUser ? null : <Login/>} 
            <Profile/>
        </div>
    )
}

export default Home