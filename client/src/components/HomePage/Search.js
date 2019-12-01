import React, { useState } from 'react';
import { connect } from 'react-redux';
import entryBackground from '../../img/entry.jpg';
import Input from './Input';
import { setAlert } from '../../actions/alert';
// Material Ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const Search = ({ setAlert }) => {
  const classes = useStyles();
  const [input, setInput] = useState('');

  const handleSelect = value => {
    setInput({ ...input, value });
    console.log(input);
  };

  return (
    <Grid container align="center" justify="center" className={classes.container}>
      {/* <Paper className={classes.Paper}> */}
      <Typography variant="h4" className={classes.typography}>
        Social Cargo brings together travelers and cargo senders
      </Typography>
      <Container maxWidth="md">
        <form className={classes.form}>
          <Typography variant="h6" className={classes.typography}>
            Search for to send your shipment or make your travel cheaper
          </Typography>
          <Box display="flex" justifyContent="center" className={classes.box}>
            <Input name="From" label={'From'} handleSelect={handleSelect} />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setAlert('biz geldik', 'warning')}
              className={classes.icon}
            >
              Find Courier
            </Button>
            <Button variant="contained" color="primary" className={classes.icon}>
              Find Cargo
            </Button>
          </Box>
        </form>
        {/* </Paper> */}
      </Container>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    background: `url(${entryBackground}) no-repeat center padding-box`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 75%',
  },

  icon: {
    margin: theme.spacing(2),
    position: 'initial',
    verticalAlign: 'middle',
  },
  form: {
    backgroundColor: '	rgb(255,250,250,0.8)',
    borderRadius: 30,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
    display: 'block',
  },

  typography: {
    align: 'center',
    margin: '20px 0',
    fontFamily: "'Poppins', sans-serif",
  },
  box: {
    // backgroundColor: 'white',
  },
}));

export default connect(null, { setAlert })(Search);
