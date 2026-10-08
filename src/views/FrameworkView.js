import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import LevelledRenderer from '../components/renderers/levelledRenderer'
import TextRenderer from '../components/renderers/textRenderer'
import '../css/main.css'

class View extends React.Component {
  render() {
    const { pageData, genericData, allMarkdownRemark } = this.props.data
    const { frontmatter: pageFrontmatter, html } = pageData
    const { frontmatter: genericFrontmatter } = genericData

    return (
      <Layout
        data={{
          allMarkdownRemark: allMarkdownRemark,
        }}
      >
        {pageFrontmatter.yaml === true ? (
          <LevelledRenderer
            pageData={pageFrontmatter}
            genericData={genericFrontmatter}
            html={html}
          />
        ) : (
          <TextRenderer data={pageFrontmatter} html={html} />
        )}
      </Layout>
    )
  }
}

export default function FrameworkView({ data }) {
  return <View data={data} />
}

export const pageQuery = graphql`
  query($frameworkPath: String!, $isYaml: Boolean!) {
    allMarkdownRemark: allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
    pageData: markdownRemark(frontmatter: { path: { eq: $frameworkPath } }) {
      html
      frontmatter {
        path
        title
        sidebarTitle
        sidebarGroup
        yaml
        levels
        homepage
        topics @include(if: $isYaml) {
          name
          title
          content {
            level
            criteria
          }
        }
      }
    }
    genericData: markdownRemark(frontmatter: { path: { eq: "/generic" } }) {
      html
      frontmatter {
        path
        title
        sidebarTitle
        sidebarGroup
        yaml
        levels
        homepage
        topics @include(if: $isYaml) {
          name
          title
          content {
            level
            criteria
          }
        }
      }
    }
  }
`
