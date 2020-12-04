import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

function generateKeywords() {
  const locations = [
    "O'Fallon",
    "O'Fallon IL",
    "O'Fallon Illinois",
    "Illinois",
    "Belleville",
    "Belleville IL",
    "Saint Louis",
    "STL",
  ]

  const tags = [
    "software",
    "freelance",
    "software engineering",
    "programmer",
    "find work",
    "alan",
    "alan sax",
    "Alan Sax",
    "Alan ",
    "Android",
    "Kotlin",
    "Web Design",
    "Website",
    "Websites",
    "Programming",
    "Mobile Development",
    "React",
    "Express",
    "Node",
    "Javascript",
    "Java",
    "Typescript",
    "iOS",
    "React Native"
  ]

  let locationTags = []

  locations.forEach(location => {
    tags.forEach(tag => {
      locationTags.push(`${location} ${tag}`)
    })
  })

  tags.forEach(tag => locationTags.push(tag))

  return locationTags.join(",")
}

function SEO({ description, lang = "en-US", meta, title = "" }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            author
            url
            image
          }
        }
      }
    `
  )
  const { siteMetadata } = site

  // const metaDescription = description || siteMetadata.description
  // const siteUrl = siteMetadata.url || "https://saxal.me"
  // const image = "https://i.imgur.com/78PClSw.jpg"

  const data = {
    title: title || siteMetadata.title,
    titleTemplate: siteMetadata.titleTemplate || "%s",
    description: description || siteMetadata.description,
    image: siteMetadata.image || "https://i.imgur.com/78PClSw.jpg",
    url: siteMetadata.url || "https://saxal.me",
  }

  return (
    <Helmet title={data.title} titleTemplate={data.titleTemplate}>
      <meta name="description" content={data.description} />
      <meta name="image" content={data.image} />

      <meta property="og:url" content={data.url} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />

      <meta property="keywords" content={generateKeywords()} />
    </Helmet>

    // <Helmet
    //   htmlAttributes={{ lang }}
    //   title={title}
    //   titleTemplate={`${site.siteMetadata.title} | %s `}
    //   meta={[
    //     {
    //       name: `description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:title`,
    //       content: title,
    //     },
    //     {
    //       property: `og:description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:type`,
    //       content: `website`,
    //     },
    //     {
    //       property: `og:url`,
    //       content: siteUrl,
    //     },
    //     {
    //       property: `og:image`,
    //       content: image,
    //     },
    //     {
    //       name: `author`,
    //       content: `Alan Sax, saxal28@gmail.com`,
    //     },
    //     {
    //       name: `Classification`,
    //       content: `Business`,
    //     },
    //     {
    //       name: `url`,
    //       content: siteUrl,
    //     },
    //     {
    //       name: `identifier-URL`,
    //       content: siteUrl,
    //     },
    //     {
    //       name: `keywords`,
    //       content: generateKeywords(),
    //     },
    //     {},
    //   ].concat(meta)}
    // ></Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

export { SEO }
