import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {

    const [isGithubHovered, setIsGithubHovered] = useState(false)
    const [isLinkedinHovered, setIsLinkedinHovered] = useState(false)
    const [isLeetcodeHovered, setIsLeetcodeHovered] = useState(false)

    // TODO: Make the logos going up when hovered
    const logoVariants = {
        hovered: { y: -10 },
        unhovered: { y: 0 }
    };


    return (
        <div className="sidebar">
            <div className="fixed">
                <ul className="sidebar--list">
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1.4, duration: 0.3 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -40 }
                        }}
                        className="sidebar--item">
                        <a
                            href="https://github.com/abou961"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#CCD6F6"
                                strokeWidth="2"
                                className="sidebar--git"
                                onMouseOver={() => setIsGithubHovered(true)}
                                onMouseLeave={() => setIsGithubHovered(false)}
                                variants={logoVariants}
                                animate={isGithubHovered ? "hovered" : "unhovered"}
                            >
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </motion.svg>
                        </a>
                    </motion.li>
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1.6, duration: 0.3 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -40 }
                        }}
                        className="sidebar--item">
                        <a href="https://www.linkedin.com/in/jean-abou-moussa" aria-label="Linkedin" target="_blank" rel="noreferrer">
                            <motion.svg xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#CCD6F6"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="sidebar--in"
                                onMouseOver={() => setIsLinkedinHovered(true)}
                                onMouseLeave={() => setIsLinkedinHovered(false)}
                                variants={logoVariants}
                                animate={isLinkedinHovered ? "hovered" : "unhovered"}
                            >
                                <title>LinkedIn</title>
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12">
                                </rect><circle cx="4" cy="4" r="2">
                                </circle>
                            </motion.svg>
                        </a>
                    </motion.li>
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1.8, duration: 0.3 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -40 }
                        }}
                        className="sidebar--item">
                        <a
                            href="https://leetcode.com/jean_am"
                            aria-label="Leetcode"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                enable-background="new 0 0 24 24"
                                viewBox="0 0 24 24"
                                id="leetcode"
                                fill="#CCD6F6"
                                stroke="#0A192F"
                                strokeWidth='0'
                                className="sidebar--leetcode"
                                onMouseOver={() => setIsLeetcodeHovered(true)}
                                onMouseLeave={() => setIsLeetcodeHovered(false)}
                                variants={logoVariants}
                                animate={isLeetcodeHovered ? "hovered" : "unhovered"}
                            >
                                <title>Leetcode</title>
                                <path d="M20.1,16.007h-9.187c-1.047,0-1.899-0.897-1.899-2s0.853-2,1.899-2H20.1c1.048,0,1.9,0.897,1.9,2S21.147,16.007,20.1,16.007z M10.913,13.507c-0.217,0-0.399,0.229-0.399,0.5s0.183,0.5,0.399,0.5H20.1c0.217,0,0.4-0.229,0.4-0.5s-0.184-0.5-0.4-0.5H10.913z" /><path d="M10.538,24c-1.621,0-3.011-0.55-4.021-1.589l-3.949-4.09C1.557,17.278,1,15.803,1,14.167c0-1.61,0.557-3.072,1.568-4.117l9.174-9.47C12.104,0.206,12.592,0,13.113,0c0,0,0,0,0.001,0c0.54,0,1.049,0.218,1.434,0.614c0.766,0.792,0.78,2.061,0.032,2.828l-1.443,1.511C13.549,5.18,13.985,5.5,14.511,5.95l2.361,1.963c0.804,0.824,0.788,2.093,0.024,2.882c-0.386,0.397-0.895,0.615-1.435,0.615c-0.001,0-0.001,0-0.002,0c-0.521,0-1.007-0.207-1.367-0.581l-2.377-1.876c-0.668-0.497-0.783-0.534-1.19-0.534c-0.422,0-0.803,0.159-1.164,0.486l-3.886,4.069c-0.282,0.291-0.43,0.702-0.43,1.191c0,0.498,0.155,0.945,0.427,1.226l3.937,4.091c0.251,0.26,0.627,0.392,1.116,0.392c0.49,0,0.866-0.132,1.116-0.392l2.461-2.454c0.351-0.363,0.836-0.569,1.357-0.57c0,0,0.001,0,0.002,0c0.539,0,1.049,0.219,1.434,0.616c0.765,0.79,0.78,2.058,0.034,2.825l-2.365,2.469C13.542,23.422,12.113,24,10.538,24z M13.113,1.5c-0.079,0-0.194,0.021-0.294,0.124l-9.173,9.469C2.907,11.856,2.5,12.948,2.5,14.167c0,1.244,0.407,2.349,1.146,3.11c0.001,0.001,0.001,0.001,0.001,0.002l3.948,4.089c0.72,0.74,1.737,1.132,2.943,1.132c1.183,0,2.202-0.405,2.946-1.173l2.365-2.469c0.188-0.193,0.172-0.531-0.032-0.741c-0.1-0.103-0.226-0.159-0.356-0.159l0,0c-0.078,0-0.192,0.021-0.29,0.122l-2.46,2.454c-0.526,0.546-1.285,0.84-2.186,0.84c-0.898,0-1.658-0.294-2.195-0.85l-3.937-4.091c-0.546-0.565-0.848-1.371-0.848-2.268c0-0.874,0.302-1.667,0.849-2.231l3.921-4.104c0.67-0.609,1.421-0.912,2.21-0.912c0.878,0,1.315,0.258,2.104,0.845l2.468,1.957c0.172,0.168,0.285,0.189,0.364,0.189l0,0c0.131,0,0.258-0.057,0.357-0.159c0.202-0.21,0.219-0.549,0.034-0.739l-2.311-1.915c-1.026-0.881-1.474-1.02-1.844-1.086c-0.271-0.05-0.51-0.247-0.595-0.51c-0.086-0.263-0.036-0.554,0.155-0.753l2.241-2.347c0.189-0.195,0.173-0.533-0.03-0.743C13.372,1.557,13.245,1.5,13.113,1.5z" />
                            </motion.svg>
                        </a>
                    </motion.li>
                </ul>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 1.8, duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -40 }
                    }} class="vl">
                </motion.div>
            </div>
        </div>
    )
}