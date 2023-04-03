import React from "react"


export default function Header() {
    return (
        <div className="header">
            <ul className="header--list">
                <li><a className="header--item" href="www.google.com">About</a></li>
                <li><a className="header--item" href="www.google.com">Projects</a></li>
                <li><a className="header--item" href="www.google.com">Experiences</a></li>
                <li><a className="header--item" href="www.google.com">Contact</a></li>
                <li className="header--item"><button className="header--button">Resume</button></li>
            </ul>
        </div>
    )
}