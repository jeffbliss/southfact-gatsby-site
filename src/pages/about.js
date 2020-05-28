import React from "react"
import { Helmet } from "react-helmet"
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'
import customTheme from '../theme'

const about = () => (
  <ThemeProvider theme={customTheme}>
    <Helmet>
      <meta // responsive meta tag: https://material-ui.com/getting-started/usage/#responsive-meta-tag
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Helmet>
    <AppBar/>
    <Box p={1}>
      <Typography variant="h3">
        About
      </Typography>
      <Typography variant="h5">
        This site is provided by the Southern Group of State Foresters (SGSF). SGSF is a non-profit organization consisting
        of State Foresters from the 13 Southern states, Puerto Rico and the U.S. Virgin Islands. The SouthFACT website provides
        access to the most current and high resolution information about changes in forest cover available for the South. 
      </Typography>
    </Box>
    <CssBaseline/>
  </ThemeProvider>
)

export default about