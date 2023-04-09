import React from "react";
import experiences from "./Data/experiences";

export default function MenuExperiences(props) {

    const experiencesItems = props.cardsExperiences;

    const experienceElements = experiencesItems.map((experience) => {
        const styleName = (experience.visible || experience.hovered) ? "menu-experiences--item--selected" : "menu-experiences--item";
        return (
            <div className={styleName} onMouseEnter={() => props.hover(experience.id)} onMouseLeave={() => props.leave(experience.id)} onClick={() => props.changeVisible(experience.id)}>
                {(experience.visible || experience.hovered) && <div className="menu-experiences--cursor-rectangle"></div>}
                <div className="menu-experiences--container">
                    {(experience.visible || experience.hovered) && <div className="menu-experiences--selected-rectangle"></div>}
                    <div className="menu-experiences-denomination">
                        <h2 className={styleName}>{experience.denomination}</h2>
                    </div>
                </div>
            </div>
        )
    }
    );

    return (
        <div className="menu-experiences">
            <div className="menu-experiences--content">
                {experienceElements}
            </div>
        </div>
    );
}
