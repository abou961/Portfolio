import React from "react";
import Experience from "./Objects/Experience"
import experiences from "./Data/experiences";
import MenuExperiences from "./MenuExperiences";
import { motion } from "framer-motion";

export default function SectionExperiences() {
    const [cardsExperiences, setCardsExperiences] = React.useState(experiences.experiences)

    const experienceElements = cardsExperiences.map((card) => {
        if (card.visible) {
            console.log(card);
            return <Experience key={card.id} role={card.role} company={card.company} date={card.date} missions={card.missions} onHover={hover} onLeave={leave} isHovered={card.hovered} visible={card.visible} />
        }
        return null;
    }
    );

    function hover(id) {
        setCardsExperiences(cardsExperiences.map((card) => {
            console.log(card.id);
            if (card.id === id) {
                return { ...card, hovered: true };
            }
            return { ...card, hovered: false };
        }));
    }

    function leave(id) {
        setCardsExperiences(cardsExperiences.map((card) => {
            return { ...card, hovered: false };
        }));
    }

    function changeVisible(id) {
        setCardsExperiences(cardsExperiences.map((card) => {
            if (card.id === id) {
                return { ...card, visible: true };
            }
            return { ...card, visible: false };
        }));
    }



    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 40 }
            }}
            className="section-experiences--container">
            <div className="section-experiences--content">
                <div className="section-experiences--title">
                    <h4>Where I've worked</h4>
                    <div className="section--line" />
                </div>
            </div>
            <div className="section-experiences">
                <div className="section-experiences--menu">
                    <MenuExperiences hover={hover} leave={leave} cardsExperiences={cardsExperiences} changeVisible={changeVisible} />
                </div>
                <div className="section-experiences--description">
                    {experienceElements}
                </div>
            </div>
        </motion.div>

    );
}