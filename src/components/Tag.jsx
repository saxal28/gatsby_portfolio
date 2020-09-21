import React from "react"

export const Tag = ({ random = false, label }) => {

    const colors = [
        "#7E0CF5",
        "#3FC5F0",
        "#0099ff",
        "#42E6A4",
        "#FFB946",
        "#FF1E56",
    ]
// 
    const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    // const randomColor = colors[Math.floor(Math.random() * 5) ]
    const backgroundColor = {
        background: randomColor,
        boxShadow: `0 4px 8px ${randomColor}`
    }

    return (
        <div className="tag">
            {label}
        </div>
    )
}