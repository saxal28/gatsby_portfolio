import React from "react"

export const Tag = ({ random = false, label, color }) => {

    const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    const backgroundColor = {
        background: !color ? randomColor : color,
        boxShadow: `0 4px 8px ${!color ? random : color}`
    }

    return (
        <div className="tag" style={backgroundColor}>
            {label}
        </div>
    )
}