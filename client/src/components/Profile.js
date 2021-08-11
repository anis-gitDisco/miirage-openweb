import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ProfilePhoto from '../assets/images/profile.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  photo: {
    margin: 'auto',
    marginTop: 50,
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundImage: `url(${ProfilePhoto})`,
    backgroundSize: 'cover',
  },
  username: {
    marginTop: 20,
    color: '#fff',
    fontSize: '1.5em',
    textAlign: 'center',
    fontFamily: "'Lato', sans-serif",
  },
  userInfo: {
    marginTop: 20,
    color: '#fff',
    fontSize: '.8em',
    textAlign: 'center',
  },
  profilePiecesContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profilePieces: {
    display: 'flex',
    height: 125,
    alignItems: 'center',
    flex: '0 0 33.333333%',
  },
  profilePiece: {
    width: '100%',
  },
});

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.photo}></div>
      <div className={classes.username}>@fiigmnt</div>
      <div className={classes.userInfo}>
        augmented street art 🌩 // blockchain developer
        <br />
        Boston, MA
      </div>
      <div className={classes.profilePiecesContainer}>
        {pieces.map((piece) => {
          return (
            <div key={piece.id} className={classes.profilePieces}>
              <img alt="User profile" className={classes.profilePiece} src={`${window.location.origin}/data/pieces/${piece.image}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const pieces = [
  {
    id: 0,
    image: 'van.gif',
  },
  {
    id: 1,
    image: 'dumpster.gif',
  },
  {
    id: 2,
    image: 'power.png',
  },
];

export default Profile;
