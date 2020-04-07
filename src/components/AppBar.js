import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link'
import { RouteAnnouncerProps } from '../../.cache/route-announcer-props';

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
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href='/' color='inherit'>
              Home
            </Link>
            <Link href='/map' color='inherit'>
              Map
            </Link>
            <Link href='/customRequests' color='inherit'>
              Custom Requests
            </Link>
            <Link href='/learn' color='inherit'>
              Learn
            </Link>
            <Link href='/contact' color='inherit'>
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}