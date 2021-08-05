import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import Navigation from './components/Navigation';
import Map from './components/Map';
import Profile from './components/Profile';

const theme = createTheme({
  overrides: {
    MuiBottomNavigationAction: {
      root: {
        color: 'white',
        '&$selected': {
          // <-- mixing the two classes
          color: 'white',
        },
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: '#000',
    color: '#fff',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/" component={Map} />
          <Route path="/map">
            <Redirect to="/" />
          </Route>
          <Route path="/profile" component={Profile} />
          <Navigation />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
