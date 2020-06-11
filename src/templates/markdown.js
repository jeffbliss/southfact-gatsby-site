import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
import { MDXRenderer } from "gatsby-plugin-mdx"

function faqTemplate(props) {
  const page = props.data.mdx
  return (
    <Layout>
      <Typography variant="h3">
        {page.frontmatter.title}
      </Typography>
      <Typography>
        <MDXRenderer>{page.body}</MDXRenderer>
      </Typography>
    </Layout>
  )
}

export default faqTemplate

export const pageQuery = graphql`
  query faqQuery ($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      id
      body
      frontmatter {
        title
        description
      }
    }
  }
`