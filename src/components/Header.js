import React from "react"
import { easeIn, motion } from "framer-motion"
import useScrollDirection from "../utils/useScrollDirection"
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export default function Header() {
    const [shadow, setShadow] = React.useState(false)

    function updateShadow() {
        if (window.scrollY > 10) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    }

    window.addEventListener("scroll", updateShadow)

    const scrollDirection = useScrollDirection();

    const frameVariants = {
        hide: { y: -75 },
        show: { y: 0 }
    };

    return (
        <motion.div
            className={shadow ? "header header-shadow" : "header"}
            variants={frameVariants}
            transition={{ duration: 0.4 }}
            animate={scrollDirection === "up" ? "show" : "hide"}
        >
            <ul className="header--list">
                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -40 }
                    }}
                >
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="header--item">About</Link>
                </motion.li>

                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -40 }
                    }}
                >
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="header--item">Projects</Link>
                </motion.li>
                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -40 }
                    }}
                >
                    <Link activeClass="active" to="experiences" spy={true} smooth={true} offset={-70} duration={500} className="header--item">Experiences</Link>
                </motion.li>
                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -40 }
                    }}
                >
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="header--item">Contact</Link>
                </motion.li>
                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -40 }
                    }}
                    className="header--item"><button className="header--button">
                        Resume</button>
                </motion.li>
            </ul>
        </motion.div >
    )
}