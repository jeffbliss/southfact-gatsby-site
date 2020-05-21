import React from "react"
import ButtonAppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography';

const caseStudies = () => (
  <React.Fragment>
    <ButtonAppBar/>
    <Typography variant="h4">
      Case studies
    </Typography>
    <Typography variant="h5">
      A play to add case studies 
    </Typography>
  </React.Fragment>
)

export default caseStudies