import React from 'react'
import "./Sponsers.css"
import { eventWrapper } from '@testing-library/user-event/dist/utils'
import img1 from "./images/logo-coca-cola.png";
import img2 from "./images/logo-oppo.png";
import img3 from "./images/logo-godrej.png";
import img4 from "./images/logo-paypal.png";
import img5 from "./images/prologis.png";
import img6 from "./images/realty.png";
import img7 from "./images/tower.png";
import img8 from "./images/equinix.png";
const Sponsers = () => {
    return (

        <section className="s-eventWrapper">
            <section className='flexColStart s-heading'>
                <span className='orangeText'>Our Sponsers </span>
                
                <span className='secondaryText'>
                    We always ready to provide the best services <br />
                    We provide You your lovable number through which you can call your loved one's.
                </span>
            </section>
            <div className="paddings innerWidth flexCenter s-container">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            <div className="paddings innerWidth flexCenter s-container">
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
            </div>
        </section>
    )
}

export default Sponsers
