import React from "react";
import Experience from "./Objects/Experience"
import experiences from "./Data/experiences";
import MenuExperiences from "./MenuExperiences";

export default function SectionExperiences() {
    const [cardsExperiences, setCardsExperiences] = React.useState(experiences.experiences)

    const experienceElements = cardsExperiences.map((card) => {
        if (card.visible) {
            console.log(card);
            return <Experience key={card.id} role={card.role} company={card.company} date={card.date} missions={card.missions} />
        }
        return null;
    }
    );


    return (
        <div className="section-experiences--container">
            <div className="section-experiences--content">
                <div className="section-experiences--title">
                    <h4>Where I've worked</h4>
                    <div className="section--line" />
                </div>
            </div>
            <div className="section-experiences">
                <div className="section-experiences--menu">
                    <MenuExperiences />
                </div>
                <div className="section-experiences--description">
                    {experienceElements}
                </div>
            </div>
        </div>

    );
}