import React from "react"
import ButtonAppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const faq = () => (
  <Grid style={{ backgroundColor: '#707070', height: '100vh' }} maxWidth="xl">
    <ButtonAppBar/>
    <Typography variant="h4" style={{ color: 'white'}}>
      Frequently Asked Questions (FAQs)
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      Are there costs associated with using the SouthFACT applications? 
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      If I create an account, will my contact information be distributed in any way?
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      Can I submit a Custom Request outside the SouthFACT project (e.g., outside the Southeastern US)?
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      How far back can a Custom Request be made for?
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      How large an area is covered by a Landsat image?
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      What's the Landsat change product/image resolution?
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      How often can each image change?
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      How many images can change in a day?
    </Typography>
    <Typography variant="h5" style={{ color: 'white'}}>
      Does the Forest Change Viewer update daily?
    </Typography>
  </Grid>
)

export default faq