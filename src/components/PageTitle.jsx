import React from "react"
import { Grid, GridItem } from '../components/Grid'
import { Navbar } from "../components/Navbar"

export const PageTitle = ({
    title,
    subtitle,
    body,
    children
}) => {
  return (
      
    <div className="page hide-delay">
      <Navbar />

      <div className="page__container">

        <Grid>
          <GridItem lg={12} xl={5}>
            <div className="page__text-column">
              <div className="line-break" />
              <div className="page__subtitle">
                {subtitle}
              </div>
              <div className="page__title">
                {title}
              </div>
              <div className="page__body">
                {body}
              </div>
            </div>
          </GridItem>
          <GridItem lg={12} xl={7}>
            <div className="page__project-column">
              {children}
            </div>
          </GridItem>
        </Grid>
      </div>

    </div>

  )
}
