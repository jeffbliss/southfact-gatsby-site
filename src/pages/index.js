import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from '../components/AppBar'
import Card from '../components/card'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '../components/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#707070'
  },
}));

export default function IndexPage() {
  const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>
      <ButtonAppBar/>
      <Typography variant="h4" align='center'>
        SouthFACT
      </Typography>
      <Typography variant="h6" align='center'>
        Tools to identify and quantify
      </Typography>
      <Typography variant="h6" align='center'>
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
        spacing={10}
      >
        <Grid item>
          <Card 
           content="Recent and historical yearly changes"
           buttonLink={<a href="https://southfact.github.io/southfact-map-v2/dist/#Home">Forest Change Viewer</a>}
          />
        </Grid>
        <Grid item>
          <Card 
            content="Identify change for specific areas and times"
            buttonLink={<a href="https://code.earthengine.google.com/5513af5039ed666eda62492d0d7b7e9d?hideCode=true">Create Custom Requests</a>}
          />
        </Grid>
        <Grid item>
          <Card 
            content="Learn more about the tools and this site"
            buttonLink={<Link to='/about' color='inherit'>About</Link>}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}