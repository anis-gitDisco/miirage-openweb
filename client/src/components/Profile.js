import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import ProfilePhoto from '../assets/images/profile.png';
import FollowButton from './Profile/FollowButton';
import Filters from './Profile/Filters'
import {
  LogoInstagram,
  LogoTwitter,
  EllipsisHorizontalOutline
} from 'react-ionicons';

import Van from '../assets/pieces/van.gif';
import Trash from '../assets/pieces/dumpster.gif';
import Power from '../assets/pieces/power.png';


console.log(window.location.origin);

const Profile = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.topContentWrapper}>
        <div className={classes.colOne}>
          <LogoTwitter color={"white"} className={classes.twitter}/>
          <LogoInstagram color={"white"} className={classes.instagram}/>
        </div>
        <div className={classes.colOne}>
          <div className={classes.userName}>@fiigmnt</div>
        </div>
        <div className={classes.colOne}>
          <EllipsisHorizontalOutline color={"white"} className={classes.menu}/>
        </div>
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.colTwo}>
          <div className={classes.followers}>
            2.5k
            <br />
            followers
          </div>
        </div>
          <div className={classes.colTwo}>
            <div className={classes.photo}></div>
          </div>
        <div className={classes.colTwo}>
          <div className={classes.likes}>
            24k
            <br />
            likes
          </div>
        </div>
      </div>
      <div className={classes.nickName}>Fiig</div>
      <div className={classes.userInfo}>
        augmented street art 🌩 // blockchain developer
        <br />
        Boston, MA
      </div>
      <div className={classes.followButton}>
        <FollowButton/>
      </div>
      <div className={classes.filters}>
        <Filters text={"Gallery"} selected/>
        <Filters text={"Map"}/>
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

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  photo: {
    marginTop: 20,
    marginBottom: 20,
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundImage: `url(${ProfilePhoto})`,
    backgroundSize: 'cover',
  },
  userInfo: {
    marginTop: 10,
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
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  colTwo: {
    flex: 1,
  },
  nickName: {
    fontSize: '1em',
    textAlign: 'center',
    fontFamily: "'Lato', sans-serif"
  },
  topContentWrapper: {
    display: 'flex',
    marginTop: 20
  },
  userName: {
    color: '#fff',
    fontSize: '1.3em',
    fontFamily: "'Lato', sans-serif",
  },
  colOne: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  menu: {
    marginLeft: 70
  },
  twitter: {
    marginRight: 5
  },
  instagram: {
    marginRight: 45
  },
  followers: {
    fontSize: '.8em',
    textAlign: 'center',
    marginLeft: 25,
    fontFamily: "'Lato', sans-serif"
  },
  likes: {
    fontSize: '.8em',
    textAlign: 'center',
    marginRight: 25,
    fontFamily: "'Lato', sans-serif"
  },
  followButton: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  filters: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }
});

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
