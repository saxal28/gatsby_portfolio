/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Alan Sax | Software Engineer | Designer | Entrepreneur.",
    titleTemplate: "Alan Sax · %s",
    description: "Available for freelance work! Feel free to reach out!",
    author: "Alan Sax",
    url: "https://saxal.me", // No trailing slash allowed!
    image: "/sparkler.jpeg", // Path to your image you placed in the 'static' folder
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    // markdown to template
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    // svg support <Icon/>
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158537537-1",
      },
    },
  ],
}
