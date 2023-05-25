import React from 'react'
import "./Carousal.css"
import { useState } from 'react'
import carimage from "../../assests/phoneimage.png";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import { SliderData } from "../../utils/data";
import { motion, variants } from 'framer-motion';
const Carousal = () => {
  const co = SliderData[0].color;
  const [backgroundColor, setbackcolor] = useState(co);

  const [current, setcurrent] = useState(0);
  const length = 5;
  var counter = 0;

  setInterval(() => {
    document.getElementsByName("image" + counter).checked = true;
    counter++;
    if (counter > 3) {
      counter = 0;
    }
  }, 5);

  const prevslide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
    setbackcolor(SliderData[current].color);
  }

  const nextSlide = () => {

    setcurrent(current === length - 1 ? 0 : current + 1);
    setbackcolor(SliderData[current].color);
  }

  const imageAnimate = {
    Offscreen: { x: '7rem', opacity: 0 },
    onscreen: { x: 0, opacity: 1 },
    transition: {
      duration: 2,
      type: "spring",
      bounce: 1.5
    }
  }

  return (
    <section className='carousal'>
      <div className='heading_c'>
        <span className="title1">Transform</span>
        <span className='title2'>Your Number</span>
      </div>
      <div className='carousal_c '>
        <motion.div className='carousalsec'
        initial={{ x: '-7rem', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring",
          }}
        >
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevslide} />
          <div className='slider' style={{ backgroundColor }}>
            {SliderData.map((slidess, index) => {
              return (
                <div key={index} className={index === current ? "activated card" : "deactivated card"}>
                  {index === current && (
                    <>
                      <div className='cardimage image-container'>
                        <img src={slidess.image} Name={"image" + index} className="imagecard" alt="" />
                      </div>
                      <div className='carddata'>
                        {slidess.Text}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        </motion.div>
        <motion.div className='Imagesec'
          initial={{ x: '7rem', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring",
            bounce: 0.7
          }}
        >
          <img src={carimage} alt="" className='imagecar' />
        </motion.div>
      </div>
    </section>
  )
}

export default Carousal