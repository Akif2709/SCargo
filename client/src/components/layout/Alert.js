import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//material UI
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import { amber, green } from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

function Alert({ alerts }) {
  const classes = useStyles1();

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(({ alertType, id, msg }) => {
      const Type = variantIcon[alertType];

      return (
        <SnackbarContent
          key={id}
          className={clsx(classes[alertType], classes.margin)}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              <Type className={clsx(classes.icon, classes.iconVariant)} />
              {msg}
            </span>
          }
        />
      );
    })
  );
}

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: 'white',
    color: theme.palette.error.dark,
  },
  info: {
    backgroundColor: 'grey',
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    marginTop: theme.spacing(2),
    position: 'relative',
  },
}));
