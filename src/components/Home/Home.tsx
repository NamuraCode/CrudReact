import * as React from 'react'
import Products from '../AllProducts/AllProducts'

function Home(){
    const [isLogged, setIsLogged ] = React.useState(false)
    let userIsAdmin: any

    React.useEffect(()=>{
        console.log("inicie");
        if(isLogged){
            sessionStorage.setItem("userLogged", "true") 
        }else{
            sessionStorage.setItem("userLogged", "false") 
        }
    },[isLogged])

    
    
    return(
        <>
            <button onClick={()=>{
                const userLogged = sessionStorage.getItem("userLogged")
                userIsAdmin = userLogged
                console.log(userIsAdmin)
            }}>verify user</button>
            <Products></Products>
        </>
    )
}

export default Home