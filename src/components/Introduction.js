import React from "react"
import { TypeAnimation } from "react-type-animation";


export default function Introduction() {
    return (
        <div className="intro">
            <TypeAnimation
                sequence={[
                    '',
                    500,
                    'Hi, my name is',
                    5000,
                    '',
                    500
                ]}
                wrapper="span"
                speed={5}
                cursor={true}
                repeat={Infinity}
                className="intro--typing-text"
            />
            <h1>Jean Abou Moussa</h1>
            <h2>Software development engineer</h2>
            <p className="intro--text">
                I am a french student completing a master's degree in
                computer science. I am currently working as a Software
                development engineer intern at <span className="cyan">Amazon Web Services</span>.
            </p>
        </div>
    );
}