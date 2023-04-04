import React from "react";
import { motion } from "framer-motion";

export default function SectionAbout() {

    const [isHovered, setIsHovered] = React.useState(false);

    // TODO: Make the logos going up when hovered
    const frameVariants = {
        hovered: { y: -15, x: -15 },
        unhovered: { y: 0, x: 0 }
    };


    return (
        <div className="section-about">
            <div className="section-about--content">
                <div className="section-about--title">
                    <h4>About me</h4>
                    <div className="section--line" />
                </div>
                <p className="section-about--text">
                    I am a french student completing a master's
                    degree in computer science. I am currently
                    working as a Software development engineer
                    intern at Amazon Web Services.
                    <br />
                    am a french student completing a master's degree
                    in computer science. am a french student
                    completing a master's degree in computer
                    science.
                    <br />
                    Here are a few technologies I've been working
                    with recently:
                </p>
                <div className="section-about--skills">
                    <ul className="customed-ul section-about--skills--list">
                        <li className="customed-li">Python</li>
                        <li className="customed-li">React</li>
                        <li className="customed-li">Flask</li>
                    </ul>
                    <ul className="customed-ul section-about--skills--list">
                        <li className="customed-li">C++</li>
                        <li className="customed-li">Java</li>
                        <li className="customed-li">AWS</li>
                    </ul>
                </div>
            </div>
            <div className="section--about--illustration">
                <div className="section--about--illustration--container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="section--about--illustration--frame"
                        variants={frameVariants}
                        animate={isHovered ? "hovered" : "unhovered"}
                    >
                    </motion.div>
                    <img src={require('../images/img_jean.jpg')} alt="Jean" className="section--about--illustration--image" />
                    <div className="section--about--illustration--overlay"></div>
                </div>
            </div>


            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}
