import React, { useState } from 'react'
import "./Header.css"
import { BiMenuAltRight } from "react-icons/bi"
import OutsideClickHandler from 'react-outside-click-handler';
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }
    return (
        <section className='h-wrapper'>
            <div className="flexCenter h-container paddings innerWidth">
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false)
                    }}
                >
                    <div className="h-menu flexCenter"
                        style={getMenuStyles(menuOpened)}
                    >
                        <a href="">
                            Home
                        </a>
                        <a href="">Store</a>
                        <a href="">Discount Zone</a>
                        <a href="">Contact Us</a>
                        <button className='button'>
                            <a href="">Sign Up</a>
                        </button>

                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>

            </div>
        </section>
    )
}

export default Header
