import React from "react"
import { Helmet } from "react-helmet"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'

const about = () => (
  <Grid style={{ backgroundColor: '#707070', height: '100vh' }} maxWidth="xl">
    <Helmet>
      <meta // responsive meta tag: https://material-ui.com/getting-started/usage/#responsive-meta-tag
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Helmet>
    <AppBar/>
    <Typography variant="h3" style={{ color: 'white'}}>
      About
    </Typography>
    <Typography variant="h6" style={{ color: 'white'}}>
      This site is provided by the Southern Group of State Foresters (SGSF). SGSF is a non-profit organization consisting
      of State Foresters from the 13 Southern states, Puerto Rico and the U.S. Virgin Islands. The SouthFACT website provides
      access to the most current and high resolution information about changes in forest cover available for the South. 
    </Typography>
  </Grid>
)

export default about