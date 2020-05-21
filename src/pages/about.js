import React from "react"
import ButtonAppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography';

const about = () => (
  <React.Fragment>
    <ButtonAppBar/>
    <Typography variant="h4">
      About
    </Typography>
    <Typography variant="h6">
      This site is provided by the Southern Group of State Foresters (SGSF). SGSF is a non-profit organization consisting
      of State Foresters from the 13 Southern states, Puerto Rico and the U.S. Virgin Islands. The SouthFACT website provides
      access to the most current and high resolution information about changes in forest cover available for the South. 
    </Typography>
  </React.Fragment>
)

export default about