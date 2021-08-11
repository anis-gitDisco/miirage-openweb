import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProfilePhoto from '../../assets/images/profile.png';
import FollowButton from './FollowButton';
import Filters from './Filters';
import {
  // LogoInstagram,
  LogoTwitter,
  EllipsisHorizontalOutline,
} from 'react-ionicons';

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.topContentWrapper}>
        <div className={classes.header}>
          <a href="https://twitter.com">
            <LogoTwitter color={'white'} className={classes.twitter} />
          </a>
        </div>
        <div className={classes.header}>@fiigmnt</div>
        <div className={classes.header}>
          <EllipsisHorizontalOutline color={'white'} className={classes.menu} />
        </div>
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.profileInfo}>
          <div className={classes.followers}>
            2.5k
            <br />
            followers
          </div>
        </div>
        <div className={classes.profileInfo}>
          <div className={classes.photo}></div>
        </div>
        <div className={classes.profileInfo}>
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
        <FollowButton />
      </div>
      <div className={classes.filters}>
        <Filters text={'Gallery'} selected />
        <Filters text={'Map'} />
      </div>
      <div className={classes.profilePiecesContainer}>
        {pieces.map((piece) => {
          return (
            <div key={piece.id} className={classes.profilePieces}>
              <img
                alt="User profile"
                className={classes.profilePiece}
                src={`${window.location.origin}/data/pieces/${piece.image}`}
              />
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
    textAlign: 'center',
  },
  topContentWrapper: {
    display: 'flex',
    marginTop: 20,
  },
  header: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  menu: {
    marginLeft: 40,
  },
  twitter: {
    marginRight: 40,
  },
  photo: {
    margin: '20px 0',
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundImage: `url(${ProfilePhoto})`,
    backgroundSize: 'cover',
  },
  userInfo: {
    marginTop: 10,
    fontSize: '.8em',
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
    width: '100%',
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
  profileInfo: {
    flex: 1,
    fontSize: '.8em',
  },
  followers: {
    marginLeft: 25,
  },
  likes: {
    marginRight: 25,
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
    justifyContent: 'center',
  },
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
