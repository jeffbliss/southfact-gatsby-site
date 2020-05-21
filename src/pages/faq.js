import React from "react"
import ButtonAppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography';

const faq = () => (
  <React.Fragment>
    <ButtonAppBar/>
    <Typography variant="h4">
      Frequently Asked Questions (FAQs)
    </Typography>
    <Typography variant="h5">
      Are there costs associated with using the SouthFACT applications? 
    </Typography>
    <Typography variant="h5">
      If I create an account, will my contact information be distributed in any way?
    </Typography>
    <Typography variant="h5">
      Can I submit a Custom Request outside the SouthFACT project (e.g., outside the Southeastern US)?
    </Typography>
    <Typography variant="h5">
      How far back can a Custom Request be made for?
    </Typography>
    <Typography variant="h5">
      How large an area is covered by a Landsat image?
    </Typography>
    <Typography variant="h5">
      What's the Landsat change product/image resolution?
    </Typography>
    <Typography variant="h5">
      How often can each image change?
    </Typography>
    <Typography variant="h5">
      How many images can change in a day?
    </Typography>
    <Typography variant="h5">
      Does the Forest Change Viewer update daily?
    </Typography>
  </React.Fragment>
)

export default faq