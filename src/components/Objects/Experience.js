import React from "react";

export default function Experience(props) {
    return (
        <div className="experience">
            <div className="experience--header">
                <h2 className="experience--header--role">
                    {props.role}
                </h2>
                <h2 className="experience--header--company">
                    @ {props.company}
                </h2>
            </div>
            <div className="experience--date">
                <h4 className="experience--date--text">
                    {props.date}
                </h4>
            </div>
            <div className="experience--missions">
                <ul className="customed-ul">
                    {props.missions.map((mission) => (
                        <li className="customed-li">
                            {mission}
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
}