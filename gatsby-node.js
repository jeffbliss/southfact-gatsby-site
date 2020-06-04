/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const markdownTemplate = path.resolve(`./src/templates/markdown.js`)
  const result = await graphql(
    `
      {
        faq: allMarkdownRemark(filter: {fields: {slug: {eq: "/faq/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        caseStudies: allMarkdownRemark(filter: {fields: {slug: {regex: "/case-studies/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
      
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create faq page.
  result.data.faq.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: markdownTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Create case studies pages.
  result.data.caseStudies.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: markdownTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}