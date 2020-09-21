import React from "react"

export const Button = ({random = false, label}) => {
    return (
        <div className="button" >
            {label}
        </div>
    )
}