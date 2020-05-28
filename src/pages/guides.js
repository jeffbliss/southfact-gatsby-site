import React from "react"
import { Helmet } from "react-helmet"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme from '../theme'
import CssBaseline from '@material-ui/core/CssBaseline';

const guides = () => (
  <ThemeProvider theme={customTheme}>
    <Helmet>
      <meta // responsive meta tag: https://material-ui.com/getting-started/usage/#responsive-meta-tag
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Helmet>
    <AppBar/>
    <Box p={1}>
      <Typography variant="h4">
        Guides
      </Typography>
      <Typography variant="h5">
        Video: How to Create an Account
      </Typography>
    </Box>
  <CssBaseline/>
  </ThemeProvider>
)

export default guides