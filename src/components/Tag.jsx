import React from "react"
import styled from "styled-components"

export const Tag = ({ random = false, label, color }) => {
  const randomColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")

  const trueColor = color ? color : randomColor

  const StyledTag = styled.div`
    background-color: ${trueColor} !important;
    &:before {
      background-color: ${trueColor};
    }
  `

  return <StyledTag className="tag">{label}</StyledTag>
}
