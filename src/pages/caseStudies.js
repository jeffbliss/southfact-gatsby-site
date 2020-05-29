import React from "react"
import { Helmet } from "react-helmet"
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'
import customTheme from '../theme'

const caseStudies = () => (
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
        Case Studies
      </Typography>
      <Typography variant="h5">
        Add Case Studies here
      </Typography>
    </Box>
    <CssBaseline/>
  </ThemeProvider>
)

export default caseStudies