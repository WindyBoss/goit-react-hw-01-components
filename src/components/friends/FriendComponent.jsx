import PropTypes from 'prop-types';
import React, { Fragment } from "react";
import { OnlineStatus, FriendImg } from './Friends.styled.jsx';

export default function FriendsComponent({
    avatar,
    name,
    isOnline,
}) {
  console.log(name);
  return (
    <Fragment>
      <OnlineStatus>{isOnline}</OnlineStatus>
      <FriendImg src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Fragment>
  )
}

FriendsComponent.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

