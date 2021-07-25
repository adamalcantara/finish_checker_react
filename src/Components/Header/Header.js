import React from 'react'
import './Header.css'
import Logo from "../../Assets/img/logo.png"

const Header = () => {
    return (
        <div id="header">
            <img src={Logo} id="logo"></img>
        </div>
    )
}

export default Header
