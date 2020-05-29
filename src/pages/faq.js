import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'
import customTheme from '../theme'

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
    <ThemeProvider theme={customTheme}>
      <Helmet>
        <meta // responsive meta tag: https://material-ui.com/getting-started/usage/#responsive-meta-tag
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <AppBar/>
      <Box p={1}>
        <Typography variant="h3">
          Frequently Asked Questions (FAQs)
        </Typography>
        {Posts}
      </Box>
      <CssBaseline/>
    </ThemeProvider>
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