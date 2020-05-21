import React from "react"
import ButtonAppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography';

const IndexPage = () => (
  <React.Fragment>
    <ButtonAppBar/>
    <Typography variant="h4" align='center'>
      SouthFACT
    </Typography>
    <Typography variant="h6" align='center'>
      Tools to identify and quantify
    </Typography>
    <Typography variant="h6" align='center'>
      changes in southern forests.
    </Typography>
  </React.Fragment>
)

export default IndexPage