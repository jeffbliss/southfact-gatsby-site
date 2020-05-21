import React from "react"
import ButtonAppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography';

const guides = () => (
  <React.Fragment>
    <ButtonAppBar/>
    <Typography variant="h4">
      Guides
    </Typography>
    <Typography variant="h5">
      Video: How to Create an Account
    </Typography>
  </React.Fragment>
)

export default guides