import React from "react"
import { Helmet } from "react-helmet"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'


const contact = () => (
  <Grid maxWidth="xl" style={{ backgroundColor: '#707070', height: '100vh', padding: 5 }}>
    <Helmet>
      <meta // responsive meta tag: https://material-ui.com/getting-started/usage/#responsive-meta-tag
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Helmet>
    <AppBar/>
    <Typography variant="h3" style={{ color: 'white'}}>
      Contact
    </Typography>
    <Typography variant="h4" style={{ color: 'white'}}>
      If you have any questions, comments, or concerns please send an email to info@southfact.com 
    </Typography>
  </Grid>
)

export default contact