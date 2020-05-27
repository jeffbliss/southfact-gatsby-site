import React from "react"
import { Helmet } from "react-helmet"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'

const guides = () => (
  <Grid style={{ backgroundColor: '#707070', height: '100vh' }} maxWidth="xl">
    <Helmet>
      <meta // responsive meta tag: https://material-ui.com/getting-started/usage/#responsive-meta-tag
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Helmet>
    <AppBar/>
    <Typography variant="h4" style={{ color: 'white'}}>
      Guides
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      Video: How to Create an Account
    </Typography>
  </Grid>
)

export default guides