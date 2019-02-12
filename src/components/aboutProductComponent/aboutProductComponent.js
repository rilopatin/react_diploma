import React from 'react'

import beans_logo_dark from '../../logo/Beans_logo_dark.svg'

const AboutProductComponent = ({text, imgSrc}) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <img className="shop__girl" src={imgSrc} alt="girl"></img>
                </div>
                <div className="col-lg-4">
                    <div className="title">About our beans</div>
                    <img className="beanslogo" src={beans_logo_dark} alt="Beans logo"></img>

                        {text}

                </div>
            </div>
            <div className="line"></div>
        </>
    )
}

export default AboutProductComponent
