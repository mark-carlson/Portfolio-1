import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../themes/theme';
import SimpleMenu from './menu'
import logo from '../../images/BD_logo.jpeg'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = 
  (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem 
        component={Link}
        to="/projects"
        onClick={handleClose}
        >
          Projects
          </MenuItem>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <ThemeProvider theme={theme.palette.primary}>
        <AppBar position="static">
          <Toolbar>
            <Icon>
              <Avatar alt="Belle" src={logo} />
            </Icon>
            <IconButton className={classes.toolbarButtons}>
           <SimpleMenu />
           </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      {renderMobileMenu}
    </div>
  );
}
