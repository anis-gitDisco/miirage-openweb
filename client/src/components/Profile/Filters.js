import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Filters = ({ text, selected}) => {
  const classes = useStyles();
  
  return(
    <div className={`${classes.container} ${(selected && classes.selected)}`}>
      <div className={classes.text}> {text} </div>
    </div>
  )
};

const useStyles = makeStyles({
  container: {
    width: '25%',
    margin: '20px 20px 0',
  },
  selected: {
    borderBottom: '1px solid #fff',
  },
  text: {
    padding: '0 0 8px',
    fontSize: '.8em'
  }
})

export default Filters;