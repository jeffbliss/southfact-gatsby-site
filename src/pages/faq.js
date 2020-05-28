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
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`

  /*return (
    <Grid style={{ backgroundColor: '#707070', height: '100vh' }} maxWidth="xl">
      <Helmet>
        <meta // responsive meta tag: https://material-ui.com/getting-started/usage/#responsive-meta-tag
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <AppBar/>
      <Typography variant="h4" style={{ color: 'white'}}>
        Frequently Asked Questions (FAQs)
      </Typography>
      <Typography variant="h5" style={{ color: 'white'}}>
        Are there costs associated with using the SouthFACT applications? 
      </Typography>
      <Typography variant="h5" style={{ color: 'white'}}>
        If I create an account, will my contact information be distributed in any way?
      </Typography>
      <Typography variant="h5" style={{ color: 'white'}}>
        Can I submit a Custom Request outside the SouthFACT project (e.g., outside the Southeastern US)?
      </Typography>
      <Typography variant="h5" style={{ color: 'white'}}>
        How far back can a Custom Request be made for?
      </Typography>
      <Typography variant="h5" style={{ color: 'white'}}>
        How large an area is covered by a Landsat image?
      </Typography>
      <Typography variant="h5" style={{ color: 'white'}}>
        What's the Landsat change product/image resolution?
      </Typography>
      <Typography variant="h5" style={{ color: 'white'}}>
        How often can each image change?
      </Typography>
      <Typography variant="h5" style={{ color: 'white'}}>
        How many images can change in a day?
      </Typography>
      <Typography variant="h5" style={{ color: 'white'}}>
        Does the Forest Change Viewer update daily?
      </Typography>
    </Grid>
  )*/
