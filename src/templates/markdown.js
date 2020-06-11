import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';

function faqTemplate(props) {
  const page = props.data.markdownRemark
  return (
    <Layout>
      <Typography variant="h3">
        {page.frontmatter.title}
      </Typography>
      <Typography>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
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