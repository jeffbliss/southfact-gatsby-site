import React from "react"
import ButtonAppBar from '../components/AppBar'
import Card from '../components/card'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '../components/Link';

export default function IndexPage() {

  return (
    <Grid maxWidth="xl" style={{ backgroundColor: '#707070', height: '100vh' }}>
      <ButtonAppBar/>
      <Typography variant="h4" align='center' style={{ color: 'white'}}>
        SouthFACT
      </Typography>
      <Typography variant="h6" align='center' style={{ color: 'white'}}>
        Tools to identify and quantify
      </Typography>
      <Typography variant="h6" align='center' style={{ color: 'white'}}>
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
        spacing={4}
      >
        <Grid item sm={4} xs={12}>
          <Card 
           content="Recent and historical yearly changes"
           buttonLink={<a href="https://southfact.github.io/southfact-map-v2/dist/#Home">Forest Change Viewer</a>}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card 
            content="Identify change for specific areas and times"
            buttonLink={<a href="https://code.earthengine.google.com/5513af5039ed666eda62492d0d7b7e9d?hideCode=true">Create Custom Requests</a>}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card 
            content="Learn more about the tools and this site"
            buttonLink={<Link to='/about' color='inherit'>About</Link>}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}