import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { 
  makeStyles,
  createMuiTheme,
  MuiThemeProvider 
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

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
  contact: {
    flexGrow: 1,
  },
}));

const defaultTheme = createMuiTheme();

export default function ButtonAppBar() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          buildTime(formatString: "YYYY-MM-DD HH:mm:ss z")
          siteMetadata {
            description
            githubRepo
          }
        }
      }
    `
  )

  const classes = useStyles();
  const [setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            {data.site.siteMetadata.description}
          </Typography>
          <Typography>
            Last build time: {data.site.buildTime}
          </Typography>
        </Box>
        <Toolbar mr={10}>
          <Button className={classes.button} size='large' color='inherit'>
            <Link to='/'>
              Home
            </Link>
          </Button>
          <Button className={classes.button} size='large' color='inherit' href="https://southfact.github.io/southfact-map-v2/dist/#Home">
            Map
          </Button>
          <Button className={classes.button} size='large' color='inherit' href="https://code.earthengine.google.com/5513af5039ed666eda62492d0d7b7e9d?hideCode=true">
            Custom Requests
          </Button>
          <Button
            className={classes.button}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            color='inherit'
            size='large'
          >
            Learn
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
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
                    <Link to='/case-studies'>
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
          </Popover>
          <Typography className={classes.contact}>
            <Button className={classes.button} size='large' color='inherit'>
              <Link to='/contact' color='inherit'>
                Contact
              </Link>
            </Button>
          </Typography>
          <Button href={data.site.siteMetadata.githubRepo} color='inherit'>
            <GitHubIcon/>
          </Button>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}