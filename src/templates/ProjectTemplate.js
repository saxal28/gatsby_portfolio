import React from "react"
import { graphql } from "gatsby"
import { LANGUAGES, ProjectLayout } from "../components/projectLayout";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  const {
      title,
      subtitle,
      website,
      technologies,
      image, 
      color
  } = frontmatter || {}

  const props = {
    title,
    subtitle: "Business Website",
    website,
    technologies,
    image,
    color
  }

  console.log({frontmatter})

  return (
    <div className={`page-${frontmatter.path}`}>
      <ProjectLayout {...props}>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </ProjectLayout>
    </div>
  )

  //   return (
  //     <div className="basic-template page-{frontmatter.path}">
  //       <h1>{frontmatter.title}</h1>

  //       <div
  //         className="blog-post-content"
  //         dangerouslySetInnerHTML={{ __html: html }}
  //       />

  //       {/* <SEO
  //         title={frontmatter.meta_title}
  //         description={frontmatter.meta_description}
  //       />

  //       <Navbar />
  //       <Hero title={frontmatter.title} />
  //       <Container size="lg" className="basic-template__content-wrapper">
  //         <Paper elevation={0}>
  //           <div className="basic-template__content-container">
  //             <div
  //               className="blog-post-content"
  //               dangerouslySetInnerHTML={{ __html: html }}
  //             />
  //           </div>
  //         </Paper>
  //       </Container>
  //       <ContactUsSection /> */}
  //     </div>
  //   )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        meta_title
        meta_description
        image
        technologies
        color
        website
      }
    }
  }
`
