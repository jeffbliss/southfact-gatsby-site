import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme from '../theme'
import CssBaseline from '@material-ui/core/CssBaseline';

const guides = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Guides = edges
    .map(edge =>
      <React.Fragment>
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
        <Typography variant="h4">
          Guides
        </Typography>
        {Guides}
      </Box>
    <CssBaseline/>
    </ThemeProvider>
  )
}

export default guides

export const pageQuery = graphql`
  query guidesQuery {
    allMarkdownRemark(sort: {fields: frontmatter___order}, filter: {frontmatter: {page: {eq: "guides"}}}) {
      edges {
        node {
          frontmatter {
            title
            order
            page
          }
          html
        }
      }
    }
  }
`