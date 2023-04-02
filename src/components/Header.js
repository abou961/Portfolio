import React from "react"


export default function Header() {
    return (
        <div className="header">
            <ul className="header--list">
                <li className="header--item">About</li>
                <li className="header--item">Projects</li>
                <li className="header--item">Experiences</li>
                <li className="header--item">Contact</li>
                <li className="header--item"><button>Resume</button></li>
            </ul>
        </div>
    )
}