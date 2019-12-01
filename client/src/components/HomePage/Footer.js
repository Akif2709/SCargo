import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

function Footer() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" component="footer" className={classes.footer}>
      {/* <Grid container spacing={4} justify="space-evenly">
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            About
          </Typography>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            About
          </Typography>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            About
          </Typography>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </Grid>
      </Grid> */}
      <Box>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="#">
            SocialCargo
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    bottom: 0,
    position: 'fixed',
    width: '100%',

    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
}));

export default Footer;
