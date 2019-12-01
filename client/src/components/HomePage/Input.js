import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoffRounded';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import cities from './Cities.json';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: option => option.name,
});

function Input({ label, handleSelect }) {
  const classes = useStyles();
  const [input, setInput] = useState('');

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-end" flexWrap="wrap">
      <Autocomplete
        id="cities"
        freeSolo
        disableOpenOnFocus
        options={cities}
        autoHighlight
        onChange={(e, values) => setInput(values)}
        getOptionLabel={option => {
          return `${option['name']}, ${option['country']}`;
        }}
        filterOptions={filterOptions}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField
            {...params}
            fullWidth
            className={classes.TextField}
            id="standard-basic"
            label="From"
          />
        )}
      />
      <FlightTakeoffIcon className={classes.icon} />

      <Autocomplete
        id="cities"
        freeSolo
        disableOpenOnFocus
        options={cities}
        autoHighlight
        onChange={(e, values) => setInput(values)}
        getOptionLabel={option => {
          return `${option['name']}, ${option['country']}`;
        }}
        filterOptions={filterOptions}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField
            {...params}
            fullWidth
            className={classes.TextField}
            id="standard-basic"
            label="To"
          />
        )}
      />
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    paddingBottom: theme.spacing(3),
  },
  TextField: {
    width: theme.spacing(33),
    paddingBottom: theme.spacing(2),
  },
}));

export default Input;
