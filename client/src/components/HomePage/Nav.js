import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/socail_cargo.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';

const Nav = ({ isAuthenticated, logout }) => {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Link to="/" className={classes.link}>
            <img className={classes.img} src={logo} alt="" width="60" />
          </Link>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Social Cargo
        </Typography>
        <Box
          component="nav"
          display="flex"
          flexDirection="row"
          className={classes.box}
          justifyContent="flex-end"
        >
          {isAuthenticated && (
            <Link to="/myprofile" className={classes.link}>
              <Button className={classes.button} color="inherit">
                <PersonIcon />
                Profile
              </Button>
            </Link>
          )}
          {!isAuthenticated && (
            <Link to="/signup" className={classes.link}>
              <Button className={classes.button} color="inherit">
                <VpnKeyRoundedIcon />
                Sign Up
              </Button>
            </Link>
          )}
          {!isAuthenticated && (
            <Link to="/login" className={classes.link}>
              <Button className={classes.button} color="inherit">
                <ExitToAppIcon />
                Login
              </Button>
            </Link>
          )}
          {isAuthenticated && (
            <Link to="/" className={classes.link}>
              <Button className={classes.button} color="inherit" onClick={logout}>
                <ExitToAppIcon />
                Sign Out
              </Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    fontFamily: 'Satisfy',
    fontSize: theme.spacing(3.5),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  img: { borderRadius: 50 },
  box: {
    flexGrow: 1,
    paddingRight: theme.spacing(2),
  },

  button: {
    padding: theme.spacing(2),
    textDecoration: 'none',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}));

Nav.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Nav);
