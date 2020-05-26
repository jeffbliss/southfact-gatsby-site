import React from "react"
import ButtonAppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const caseStudies = () => (
  <Grid style={{ backgroundColor: '#707070', height: '100vh' }} maxWidth="xl">
    <ButtonAppBar/>
    <Typography variant="h4" style={{ color: 'white'}}>
      Case studies
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      A play to add case studies 
    </Typography>
  </Grid>
)

export default caseStudies