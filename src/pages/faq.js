import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography';

//<PostLink key={edge.node.id} post={edge.node} />
const faq = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .map(edge =>
      <React.Fragment>
        <Typography variant="h5">
          {edge.node.frontmatter.title}
        </Typography>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: edge.node.html }}/> 
      </React.Fragment>
    )
  return (
    <Layout>
      <Typography variant="h3">
        Frequently Asked Questions (FAQs)
      </Typography>
      {Posts}
    </Layout>
  )
}

export default faq

export const pageQuery = graphql`
  query faqQuery {
    allMarkdownRemark(sort: {fields: frontmatter___order}, filter: {frontmatter: {page: {eq: "faq"}}}) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`