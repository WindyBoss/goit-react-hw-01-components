import React, { Fragment } from "react";
import FriendsComponent from './FriendComponent.jsx';
import PropTypes from 'prop-types';
import { FriendsListContainer, FriendContainer } from './Friends.styled.jsx';

export default function FriendsList({ friendList }) {
  return (
    <Fragment>
      <FriendsListContainer>
        {friendList.map(friend => (
            <FriendContainer key={friend.id}>
              <FriendsComponent
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </FriendContainer>
          ))}
      </FriendsListContainer>
    </Fragment>
  )
}

FriendsList.propTypes = {
    friendList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};
