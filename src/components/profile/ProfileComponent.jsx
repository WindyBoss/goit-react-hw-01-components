import PropTypes from 'prop-types';
import React, { Fragment } from "react";
import { ProfileStatsContainer, StatsListContainer, InfoContainer, ImgContainer } from './Profile.styled.jsx'

export default function ProfileComponent({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <Fragment>
      <InfoContainer>
        <ImgContainer
          src={avatar}
          alt={username}
        />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </InfoContainer>
      <ProfileStatsContainer>
        <StatsListContainer>
          <span>Followers</span>
          <span>{followers}</span>
        </StatsListContainer>
        <StatsListContainer>
          <span>Views</span>
          <span>{views}</span>
        </StatsListContainer>
        <StatsListContainer>
          <span>Likes</span>
          <span>{likes}</span>
        </StatsListContainer>
      </ProfileStatsContainer>
    </Fragment>
  )
}


ProfileComponent.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,

}
