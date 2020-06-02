/*import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';

const guideTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Typography>
        adding some text
      </Typography>
      <Typography variant="h4">
        {post.frontmatter.title}
      </Typography>
      <Typography>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Typography>
    </Layout>
  )
}

export default guideTemplate

/*export const pageQuery = graphql`
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

export const pageQuery = graphql`
  query guidesQuery {
    markdownRemark(fields: {slug: {eq: "/guides"}}) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`*/