import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'
import Card from '../components/card'
import Link from '../components/Link';

export default function IndexPage({ data }) {

  return (
    <Grid maxWidth="xl" style={{ backgroundColor: '#707070', height: '100vh', padding: 5 }}>
      <Helmet>
        <meta // responsive meta tag: https://material-ui.com/getting-started/usage/#responsive-meta-tag
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <AppBar/>
      <Typography variant="h3" align='center' style={{ color: 'white'}}>
        {data.site.siteMetadata.title}
      </Typography>
      <Typography variant="h5" align='center' style={{ color: 'white'}}>
        Tools to identify and quantify
      </Typography>
      <Typography variant="h5" align='center' style={{ color: 'white'}}>
        changes in southern forests.
      </Typography>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid
        container
        justify="center"
        spacing={3}
        style={{ padding: 10 }}
      >
        <Grid item sm={3} xs={12}>
          <Card 
           content="Recent and historical yearly changes"
           buttonLink={<a href="https://southfact.github.io/southfact-map-v2/dist/#Home">Forest Change Viewer</a>}
          />
        </Grid>
        <Grid item sm={3} xs={12}>
          <Card 
            content="Identify change for specific areas and times"
            buttonLink={<a href="https://code.earthengine.google.com/5513af5039ed666eda62492d0d7b7e9d?hideCode=true">Create Custom Requests</a>}
          />
        </Grid>
        <Grid item sm={3} xs={12}>
          <Card 
            content="Learn more about the tools and this site"
            buttonLink={<Link to='/about' color='inherit'>About</Link>}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`