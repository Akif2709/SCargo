import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import Spinner from '../layout/Spinner';

//Material UI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

function Profile({ user, loadUser }) {
  const classes = useStyles();
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return user === null ? (
    <Spinner />
  ) : (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Grid item sm={3} xs={12} className={classes.border}>
          <Box boxShadow={1} className={clsx(classes.box, classes.center)}>
            <Box>
              <Avatar alt="Profile" sizes="100px" src={user.avatar} className={classes.Avatar} />
              <Typography variant="h5" color="textSecondary" align="center">
                {user.name}
              </Typography>
              <Divider />
            </Box>

            <Typography>Email: {user.email}</Typography>
          </Box>
        </Grid>
        <Grid item sm={9} xs={12}>
          <Box boxShadow={1} className={classes.box}>
            dsadsf
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadUser })(Profile);

const useStyles = makeStyles(theme => ({
  root: {
    color: 'black',
    marginTop: '50px',
  },
  divider: {
    height: 300,
  },
  Avatar: {
    width: '70%',
    height: '70%',
    margin: 'auto',
    [theme.breakpoints.up('xs')]: {
      width: '50%',
      height: '50%',
    },
  },
  center: {
    padding: theme.spacing(3),
  },
  box: {
    backgroundColor: 'white',
  },
}));
