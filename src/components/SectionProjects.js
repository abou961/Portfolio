import React from "react"
import projects from "./Data/projects"
import CardProject from "./CardProject"


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
        <CardProject id={card.id} title={card.title} description={card.description} git_url={card.git_url} onHover={hovered} onLeave={leave} isHovered={card.isHovered} />
    ));



    return (
        <div className="section-projects">
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
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div >
    );
}
