import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Filters = ({ text, selected}) => {
  const classes = useStyles();
  
  return(
    <div className={`${classes.container} ${(selected && classes.selected)}`}>
      <div className={classes.follow}> {text} </div>
    </div>
  )
};

const useStyles = makeStyles({
  container: {
    width: '25%',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  selected: {
    borderBottom: '1px solid #fff',
  },
  follow: {
    color: '#fff',
    fontFamily: "'Lato', sans-serif",
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: '.8em'
  }
})

export default Filters;