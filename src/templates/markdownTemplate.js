/*import React from "react"
import { graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Grid style={{ backgroundColor: '#707070', height: '100vh' }} maxWidth="xl">
      <AppBar/>
      <Typography variant="h4" style={{ color: 'white'}}>
        {frontmatter.title}
      </Typography>
      <Typography variant="h5" style={{ color: 'white'}}
        className="faq-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Grid>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`*/