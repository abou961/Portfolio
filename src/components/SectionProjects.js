import React from "react"
import projects from "./Data/projects"
import CardProject from "./Objects/CardProject"
import { motion } from "framer-motion"


export default function SectionProjects() {
    const [cards, setCards] = React.useState(projects.projects);

    function hovered(id) {
        setCards(cards.map((card) => {
            if (card.id === id) {
                return { ...card, isHovered: true };
            }
            return { ...card, isHovered: false };
        }));
    }

    function leave(id) {
        setCards(cards.map((card) => {
            return { ...card, isHovered: false };
        }));
    }

    const cardElements = cards.map((card) => (
        <CardProject key={card.id} id={card.id} title={card.title} description={card.description} git_url={card.git_url} onHover={hovered} onLeave={leave} isHovered={card.isHovered} />
    ));



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
            className="section-projects">
            <div className="section-projects--content">
                <div className="section-projects--title">
                    <h4>Some things I've built</h4>
                    <div className="section--line" />
                </div>
            </div>
            <div className="section-projects--container">
                <div className="section-projects--projects">
                    {cardElements}
                </div>
            </div >
            <div className="section-projects--button-container">
                <a className="section-about--button--link" href="https://github.com/abou961" target="_blank" rel="noopener noreferrer">
                    <button className="section-about--button">More on my Github &gt;</button>
                </a>
            </div>
        </motion.div >
    );
}
