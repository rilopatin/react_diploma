import React from 'react'

import beans_logo_dark from '../../logo/Beans_logo_dark.svg'

const AboutUsComponent = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="title" style={{'fontFamily': 'Merienda', 'textAlign': 'center'}}>About Us</div>
                        <img className="beanslogo"  src={beans_logo_dark} alt="Beans logo"></img>
                        <div className="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br></br>

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsComponent

