import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const FollowButton = () => {
  const classes = useStyles();
  return(
    <div className={classes.container}>
      <div className={classes.follow}> Follow </div>
    </div>
  )
};

const useStyles = makeStyles({
  container: {
    backgroundColor: '#fff',
    width: '38%',
    borderRadius: 5,
  },
  follow: {
    color: '#000',
    fontFamily: "'Lato', sans-serif",
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  }
})

export default FollowButton;
