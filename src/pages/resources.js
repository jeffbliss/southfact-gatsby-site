import React from "react"
import { Helmet } from "react-helmet"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'

const resources = () => (
  <Grid maxWidth="xl" style={{ backgroundColor: '#707070', height: '100vh', padding: 5 }}>
    <Helmet>
      <meta // responsive meta tag: https://material-ui.com/getting-started/usage/#responsive-meta-tag
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Helmet>
    <AppBar/>
    <Typography variant="h3" style={{ color: 'white'}}>
      Resources
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      Placeholder for resources page 
    </Typography>
  </Grid>
)

export default resources