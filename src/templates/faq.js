import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';

const faqTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Typography variant="h4">
        {post.frontmatter.title}
      </Typography>
      <Typography>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Typography>
    </Layout>
  )
}

export default faqTemplate

export const pageQuery = graphql`
  query faqQuery ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`