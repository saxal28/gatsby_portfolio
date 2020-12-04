import React from "react"

import { Grid, GridItem } from '../components/Grid'
import { Navbar } from "../components/Navbar"
import { ProjectSlider } from '../components/ProjectSlider'
import { SEO } from "../components/Seo"

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <SEO/>

      <div className="home__container">

        <Grid>
          <GridItem lg={12} xl={7}>
            <div className="home__text-column">
              <div className="line-break" />
              <div className="home__subtitle">
                Software Engineer | Designer | Entrepreneur
              </div>
              <div className="home__title">
                Howdy...<br /> I'm Alan Sax
              </div>
              <div className="home__body">
                Welcome to my portfolio! Come check out what I'm working on! I am <strong>available for freelance work</strong>; shoot me an email!
              </div>
            </div>
          </GridItem>
          <GridItem lg={12} xl={5}>
            <div className="home__project-column">
              <ProjectSlider />
            </div>
          </GridItem>
        </Grid>
      </div>

    </div>

  )
}

