import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//<PostLink key={edge.node.id} post={edge.node} />
const faq = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .map(edge => 
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" style={{ color: 'black'}}>
            {edge.node.frontmatter.title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="h6" dangerouslySetInnerHTML={{ __html: edge.node.html }}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  return (
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
        {Posts}
      </Typography>
    </Grid>
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
            path
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
