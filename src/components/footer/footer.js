import React from 'react'
import {Link} from 'react-router-dom'

import './footer.sass'
import logo_black from '../../logo/Logo_black.svg'
import beans_logo_dark from '../../logo/Beans_logo_dark.svg'

const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-4">
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to='/'>
                                    <img src={logo_black} alt="logo"></img>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to='/coffee/'>
                                    Our coffee
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to='/goods/'>
                                    For your pleasure
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className="beanslogo" src={beans_logo_dark} alt="Beans logo"></img>
            </div>
        </div>
    )
}

export default Footer