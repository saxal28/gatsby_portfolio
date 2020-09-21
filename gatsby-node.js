/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage, createRedirect } = actions
    const blogPostTemplate = path.resolve(`src/templates/ProjectTemplate.js`)

    const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {}, // additional data can be passed via context
        })
    })
}


// ie 11 local support
exports.onCreateWebpackConfig = function onCreateWebpackConfig({ actions, stage, getConfig }) {
  const config = getConfig()
  if (stage === 'develop') {
    config.entry.commons.unshift(require.resolve('core-js'))
    actions.replaceWebpackConfig(config)
  }
}
