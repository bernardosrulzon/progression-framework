const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const FrameworkView = path.resolve(`src/views/FrameworkView.js`)
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              yaml
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: FrameworkView,
        context: {
          isYaml: node.frontmatter.yaml,
          frameworkPath: node.frontmatter.path,
        },
      })
    })
  })
}
