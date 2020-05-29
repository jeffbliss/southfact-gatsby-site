import React from 'react';
import { 
  makeStyles,
  createMuiTheme,
  MuiThemeProvider 
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none"
  },
  root: {
    flexGrow: 1,
    backgroundColor: '#101012'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  Link: {
    marginRight: theme.spacing(2),
    padding: '0, 2px'
  },
  title: {
    flexGrow: 1,
  },
}));

const defaultTheme = createMuiTheme();

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <AppBar className={classes.root} position="static">
        <Box px={3} py={1}>
          <Typography variant="h5">
            Southern Forest Area Change Tools - SouthFACT
          </Typography>
        </Box>
        <Toolbar mr={10}>
          <Button className={classes.button} size='large' color='inherit'>
            <Link to='/' color='inherit'>
              Home
            </Link>
          </Button>
          <Button className={classes.button} size='large' color='inherit' href="https://southfact.github.io/southfact-map-v2/dist/#Home">
            Map
          </Button>
          <Button className={classes.button} size='large' color='inherit' href="https://code.earthengine.google.com/5513af5039ed666eda62492d0d7b7e9d?hideCode=true">
            Custom Requests
          </Button>
          <Box>
            <Button
              className={classes.button}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              color='inherit'
              size='large'
            >
              Learn
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <MenuItem onClick={handleClose}>
                        <Link to='/about'>
                          About
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to='/caseStudies'>
                          Case Studies
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to='/faq'>
                          Frequently Asked Questions
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to='/guides'>
                          Guides
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to='/resources'>
                          Resources
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to='/methods'>
                          Methods
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
            </Popper>
          </Box>
          <Button className={classes.button} size='large' color='inherit'>
            <Link to='/contact' color='inherit'>
              Contact
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}