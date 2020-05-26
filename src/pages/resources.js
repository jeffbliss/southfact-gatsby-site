import React from "react"
import ButtonAppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const resources = () => (
  <Grid style={{ backgroundColor: '#707070', height: '100vh' }} maxWidth="xl">
    <ButtonAppBar/>
    <Typography variant="h4" style={{ color: 'white'}}>
      Resources
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      Placeholder for resources page 
    </Typography>
  </Grid>
)

export default resources