import React from "react";
import experiences from "./Data/experiences";

export default function MenuExperiences() {

    const [experiencesItems, setExperiencesItems] = React.useState(experiences.experiences);

    const experienceElements = experiencesItems.map((experience) => {
        const styleName = experience.visible ? "menu-experiences--item--selected" : "menu-experiences--item";
        return (
            <div className={styleName}>
                <h2 className={styleName}>{experience.denomination}</h2>
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
