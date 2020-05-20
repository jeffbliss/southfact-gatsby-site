import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import { StylesContext } from '@material-ui/styles';
import "../css/styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  Link: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <h2>
          Southern Forest Area Change Tools - SouthFACT
        </h2>
        <Toolbar mr={10}>
          <Typography variant="h6" className={classes.title}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              lg="5" // number of grid components
            >
              <Link to='/' color='inherit'>
                Home
              </Link>
              <a href="https://southfact.github.io/southfact-map-v2/dist/#Home">Map</a>
              <a href="https://code.earthengine.google.com/5513af5039ed666eda62492d0d7b7e9d?hideCode=true">Custom Requests</a>
              <Link to='/learn' color='inherit'>
                Learn
              </Link>
              <Link to='/contact' color='inherit'>
                Contact
              </Link>
            </Grid>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}