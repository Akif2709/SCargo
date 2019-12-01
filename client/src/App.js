import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Nav from './components/HomePage/Nav';
import Search from './components/HomePage/Search';
import Footer from './components/HomePage/Footer';
import SignUp from './components/Login_Signup/SignUp';
import Profile from './components/ProfilePage/Profile';
import Login from './components/Login_Signup/Login';
import PrivateRoute from './components/Routing/PrivateRoute';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Alert from './components/layout/Alert';

//
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: { main: 'rgb(45, 114, 183)' },
    secondary: {
      main: '#E33E7F',
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    background: {
      default: '#f2f2f2',
    },
  },
});

// rgb(45, 114, 183)

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/myprofile" component={Profile} />
          </Switch>
          <Footer />
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
