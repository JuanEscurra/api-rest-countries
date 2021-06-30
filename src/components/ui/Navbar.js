import React, { useState } from 'react'
import {
    Link
  } from "react-router-dom";

export const Navbar = () => {

    const [mode, setMode] = useState('light')

    const changeMode = () => {
        if(mode === 'light') {
            document.documentElement.style.setProperty('--primary','hsl(207, 26%, 17%)');
            document.documentElement.style.setProperty('--secondary','hsl(0, 0%, 100%)');
            setMode('dark')
        } else {
            document.documentElement.style.setProperty('--primary','hsl(0, 0%, 98%)');
            document.documentElement.style.setProperty('--secondary','hsl(200, 15%, 8%)');
            setMode('light');
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/" className="navbar__title">Where in the world?</Link>
            </div>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <button className="navbar__btn" onClick={changeMode}>
                        <i className="far fa-moon"></i> Dark Mode
                    </button>
                </li>
            </ul>
        </nav>
    )
}
