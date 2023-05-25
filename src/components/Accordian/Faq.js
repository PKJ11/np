import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import "./Faq.css";
import faqimg from "./contact.jpg"
import data from "./accordion"
import { motion } from 'framer-motion';
const Faq = () => {
  const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });
  return (

    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <motion.div
          variants={slideIn("up", "tween", 0.5, 1.3)} 
          className="f-left">
          <div
          className="image-container">
            <img src={faqimg} alt="" />
          </div>
        </motion.div>
        <div className="flexColStart f-right">
          <span className='orangeText'>Your Mosked </span>
          <span className='primaryText'>And Frequent questions.</span>
          <span className='secondaryText'>
            We always ready to provide the best services <br />
            We provide You your lovable number through which you can call your loved one's.
          </span>


          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}>
            {
              data.map((item, i) => {
                const [className, setClassName] = useState(null)
                return (
                  <AccordionItem
                    className={`accordionItem ${className}`}
                    key={i}
                    uuid={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton
                        className='accordionButton flexCenter'
                      >
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">
                        {item.detail}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })
            }
          </Accordion>
        </div>
      </div>
    </section>

  )
}

export default Faq
