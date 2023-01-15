import { LegacyRef, useEffect, useRef, useState } from 'react'
import managerImage from '../../assets/images/Avatar.svg'
import ModalCreate from './ModalCreate/ModalCreate'
import userInterface from '../../models/User'
import closeImage from '../../assets/images/Close.svg'

function Profile(){
    const close = useRef<HTMLInputElement>(null!)
    const modal = useRef<HTMLDivElement>(null!)
    const [activeCreate, setActiveCreate] = useState(false)
    let sessionUser = window.sessionStorage.getItem("userLogged")
    let defaultUser:userInterface = {
        name:"User",
        type:"user"
    }
    let userObject: userInterface = JSON.parse(sessionUser ? sessionUser : JSON.stringify(defaultUser))

    useEffect(()=>{
        close.current.focus()
        modal.current.focus()
    },[])
    return(
        <div className='main-profile'>
            <img className='close' src={closeImage} onClick={(e)=>{
               close.current.classList.toggle("hidden-profile")
               e.currentTarget.classList.toggle("rotate")
            }}></img>
            <section ref={close} onClick={(e)=>{
                if(close.current == e.target && activeCreate){
                    setActiveCreate(false)
                }
            }} className='profile-content'>
                <article className='content-manager'>
                    <img src={managerImage} alt='img-manager'/>
                    <h1>{userObject.name}</h1>
                </article>
                <article className='content-create' >
                    <button className='buttton button-create'
                    onClick={()=>{
                        !activeCreate ? setActiveCreate(true) : setActiveCreate(false)
                    }}
                    >Add Item</button>
                    <div ref={modal}>
                        {
                            activeCreate ? <ModalCreate></ModalCreate> : null
                        }
                    </div>
                </article>
                <article className='content-city'>
                    <h1>Colombia Country</h1>
                    <h3>medellin city</h3>
                </article>
            </section>
        </div>
    )
}

export default Profile