import React from "react"
import ButtonAppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const methods = () => (
  <Grid style={{ backgroundColor: '#707070', height: '100vh' }} maxWidth="xl">
    <ButtonAppBar/>
    <Typography variant="h4" style={{ color: 'white'}}>
      Methods
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      Placeholder for Methods Page 
    </Typography>
  </Grid>
)

export default methods