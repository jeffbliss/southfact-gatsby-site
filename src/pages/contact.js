import React from "react"
import ButtonAppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const contact = () => (
  <Grid style={{ backgroundColor: '#707070', height: '100vh' }} maxWidth="xl">
    <ButtonAppBar/>
    <Typography variant="h4" style={{ color: 'white'}}>
      Contact
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      If you have any questions, comments, or concerns please send an email to info@southfact.com 
    </Typography>
  </Grid>
)

export default contact