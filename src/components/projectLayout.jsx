import React from "react"
import { Tag } from "./Tag"

import { Grid, GridItem } from "../components/Grid"
import { Navbar } from "../components/Navbar"
import styled from "styled-components"

export const ProjectLayout = ({
  title,
  subtitle,
  website,
  technologies = [],
  children,
  image,
  color,
  short_description,
}) => {
  const getTags = tags =>
    tags.map(tag => <Tag key={tag} label={tag} color={color} />)

    console.log({image})

  const StyledPage = styled.div`
    background-image: url(${image}) !important;
    background-size: cover !important;
    background-position: center !important;

    &:before {
      background-image: url(${image}) !important;
      background-size: cover !important;
      background-position: center !important;
    }

    &.hide-delay {
      background: ${color} !important;
      transition-delay: 2s;
    }
  `

  const StyledButtonLink = styled.a`
    background: ${color} !important;
    &:before {
      background: ${color};
    }
  `

  return (
    <StyledPage className="page hide-delay">
      <Navbar />

      <div className="page__container">
        <Grid>
          <GridItem lg={12} xl={5}>
            <div className="page__text-column">
              <div className="line-break" />
              <div className="page__subtitle">{subtitle}</div>
              <div className="page__title">{title}</div>
              <div className="page__body">{short_description}</div>
            </div>
          </GridItem>
          <GridItem lg={12} xl={7}>
            <div className="page__project-column">
              <div className="page__content">
                <div
                  className="page__content-image"
                  style={{ background: `url(${image})` }}
                ></div>

                <div className="page__content-container">
                  <div className="page__content-title">Technologies Used</div>
                  <div className="page__content-body">
                    {getTags(technologies)}
                  </div>
                  <br />

                  <div className="page__content-title">
                    Description of Project
                  </div>
                  <div className="page__content-body">
                    {children}
                    <br />
                    <br />
                    <StyledButtonLink
                      href={website}
                      className="button"
                      target="_blank"
                    >
                      View Website
                    </StyledButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
        </Grid>
      </div>
    </StyledPage>
  )
}
