import React ,{useState,useEffect}from 'react'
import logo from './img.svg'

import './App.css'

const Nav = () => {
    const[Show,handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                handleShow(true)
            }
            else{
                handleShow(false) 
            }
        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    },[])
    return (
        <div className={Show?"nav":"Nav"}>
            <img  className="logo" src={logo}  alt="Netflix logo"/>
            <img  className="profile-logo" src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="Netflix logo"/>
          
        </div>
    )
}

export default Nav
