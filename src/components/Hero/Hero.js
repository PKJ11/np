import React from 'react'
import dImg from "./desktopimage.png"
import "./Hero.css"
import CountUp from 'react-countup'
import { motion } from "framer-motion"
const Hero = () => {
    return (
        <div>
            <section className="hero-wrapper">
                <div className="paddings innerWidth flexCenter hero-container">
                    <div className="hero-left">
                        <div className="hero-title">

                            <motion.h1
                                initial={{ y: '2rem', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 2,
                                    type: "spring",
                                }}
                            >

                                INDIA'S BIGGEST<br />

                                VIP NUMBER

                            </motion.h1>
                        </div>
                        <motion.div 
                        initial={{ y: '2rem', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 2,
                                    type: "spring",
                                }}
                        className="hero-desc flexColStart secondaryText">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusamus.</span>
                        </motion.div>

                        <motion.div 
                        initial={{ y: '2rem', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 2,
                                    type: "spring",
                                }}
                        className="search-bar flexCenter">
                            <div className='flexColStart'>
                                <button className='button'>Contact-Us</button>
                                <span className='secondaryText pk'>Try Contacting with us </span>
                            </div>

                            <div className='flexColStart'>
                                <button className='button'>Search</button>
                                <span className='secondaryText pk'>Start searching your number </span>
                            </div>
                        </motion.div>

                        <motion.div 
                        initial={{ y: '-2rem', opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 2,
                                    type: "spring",
                                    bounce:0.8
                                }}
                        className="flexCenter stats">
                            <div className="flexColStart stat">
                                <span>
                                    <CountUp start={1500} end={2000} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryText flexColCenter'>Premium Numbers</span>
                            </div>
                            <div className="flexColStart stat">
                                <span >
                                    <CountUp start={5000} end={5552} duration={4} />
                                    <span>+</span>
                                </span>
                                <spa className='secondaryText flexColCenter'>Premium Numbers</spa>
                            </div>
                            <div className="flexColStart stat">
                                <span >
                                    <CountUp start={8000} end={8655} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryText flexColCenter'>Premium Numbers</span>
                            </div>
                        </motion.div>

                    </div>
                    <motion.div
                        initial={{ x: '7rem', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "tween",
                        }}
                        className="hero-right flexcenter">
                        <div className="image-container">
                            <img src={dImg} alt="" />
                        </div>

                    </motion.div>
                </div>
            </section>

        </div>
    )
}

export default Hero
