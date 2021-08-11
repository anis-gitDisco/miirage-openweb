import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  MapOutline,
  EyeOutline,
  SearchOutline,
  PersonOutline,
} from 'react-ionicons';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    height: 100,
    backgroundColor: '#000',
  },
});

const styles = {
  icon: {
    height: 30,
    width: 30,
    color: '#fff',
  },
};

const Navigation = () => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState();

  const handleChange = (event, value) => {
    setValue(value);
    setTimeout(() => {
      setValue();
    }, 2000);
    history.push(`./${value}`);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="map"
        value="map"
        icon={<MapOutline style={styles.icon} />}
      />
      <BottomNavigationAction
        label="view"
        value="view"
        icon={<EyeOutline style={styles.icon} />}
      />
      <BottomNavigationAction
        label="explore"
        value="explore"
        icon={<SearchOutline style={styles.icon} />}
      />
      <BottomNavigationAction
        label="profile"
        value="profile"
        icon={<PersonOutline style={styles.icon} />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
