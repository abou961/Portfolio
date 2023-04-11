import React from "react";

export default function SectionContact() {
    return (
        <div
            className="section-contact"
            name="contact"
        >
            <div className="section-contact--content">
                <div className="section-contact--title">
                    <h4>Contact me</h4>
                    <div className="section--line" />
                </div>
                <div className="section-contact--list">
                    <li className="section-contact--list--item customed-li">
                        <a
                            className="section-contact--list--item--link"
                            href="mailto:jean.abou-moussa@insa-lyon.fr"
                        >jean.abou-moussa@insa-lyon.fr
                        </a>
                    </li>
                    <li className="section-contact--list--item customed-li">
                        <a
                            className="section-contact--list--item--link"
                            href="https://www.linkedin.com/in/jean-abou-moussa/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >LinkedIn
                        </a>
                    </li>
                </div>
            </div>
        </div>
    );
}



