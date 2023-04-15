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
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.5 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 40 }
            }}
            className="section-about"
            name="about">
            <div className="section-about--content">
                <div className="section-about--title">
                    <h4>About me</h4>
                    <div className="section--line" />
                </div>
                <p className="section-about--text">
                    Hi, I'm Jean, a student in software engineering with a passion for algorithms and data structures.
                    <br />
                    Recently, I had the opportunity to participate in the 2022 European Competitive Programming
                    Contest <a href="https://swerc.eu/2022/about/" target="_blank" className="cyan">SWERC ICPC</a>, where I put my skills to the test and learned from other talented developers.
                    <br />
                    <br />
                    Currently completing a master's degree in computer science at INSA Lyon, I have also gained professional experience through internships and part-time positions.
                    <br />
                    <br />
                    Here are a few technologies I've been working with recently:
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
        </motion.div>
    );
}
