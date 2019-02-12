import React from 'react'
import {Link} from 'react-router-dom'

import '../header/header.sass'
import logo from '../../logo/Logo.svg'

const Header = () => {
    return (
        <div>
            <ul className="header">
                <li className="header__item">
                    <Link to='/'>
                        <img src={logo} alt="logo"></img>
                    </Link>
                </li>
                <li className="header__item">
                    <Link to='/coffee/'>
                        Our coffee
                    </Link>
                </li>
                <li className="header__item">
                    <Link to='/goods/'>
                        For your pleasure
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header