import React from "react"
import Cool from "../../svg/cool.svg";
import Email from "../../svg/email.svg"

const links = [
    { label: "Home", url: "/" },
    { label: "Contact", url: "/contact" },
]

export const Navbar = () => {
    return (
        <div className="navbar">
            <a className="no-style" href="/"><div className="navbar__brand">
                <Cool />
                <span>Saxal.me</span>
            </div>
            </a>

            <div className="navbar__links-container">
                {
                    links.map((link, index) => <a href={link.url} key={index} className="navbar__link">{link.label}</a>
                    )}
                <a href="mailto:saxal28@gmail.com?subject=Saxal.Me%20|%20Freelance%20/%20Contact%20Request" className="no-style email-icon"><Email /></a>
            </div>
        </div>
    )
}