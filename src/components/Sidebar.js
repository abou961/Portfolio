import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {

    const [isGithubHovered, setIsGithubHovered] = useState(false)
    const [isLinkedinHovered, setIsLinkedinHovered] = useState(false)

    // TODO: Make the logos going up when hovered
    const logoVariants = {
        hovered: { y: -10 },
        unhovered: { y: 0 }
    };


    return (
        <div className="sidebar">
            <div className="fixed">
                <ul className="sidebar--list">
                    <li className="sidebar--item">
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
                    </li>
                    <li className="sidebar--item">
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
                    </li>
                </ul>
                <div class="vl"></div>
            </div>
        </div>
    )
}