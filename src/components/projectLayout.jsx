import React from "react"
import { Button } from './Button'
import { PageTitle } from './PageTitle'
import { Tag } from './Tag'

export const ProjectLayout = ({ title, subtitle, website, technologies = [], children, image, color }) => {
    const getTags = (tags) => tags.map(tag => <Tag key={tag} label={tag} color={color} />)

    return (
        <PageTitle
            title={title}
            subtitle={subtitle}
            body="Feel free to give me a call, shoot me an email, or reach out on social media! I'm available for freelance work at an amazing rate!"
        >
            <div className="page__content">

                <div className="page__content-image" style={{background: `url(${image})`}}></div>

                <div className="page__content-container">
                    <div className="page__content-title">Technologies Used</div>
                    <div className="page__content-body">
                        {getTags(technologies)}
                    </div>
                    <br />

                    <div className="page__content-title">Description of Project</div>
                    <div className="page__content-body">
                        {children}
                        <br /><br /><br />
                        <a href={website} className="button" target="_blank">View Website</a>
                    </div>
                </div>

            </div>

        </PageTitle>
    )
}