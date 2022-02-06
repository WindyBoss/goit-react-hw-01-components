import ProfileComponent from './ProfileComponent.jsx';
import { ProfileContainer} from './Profile.styled.jsx'

export default function Profile({userData}) {
  return (
    <ProfileContainer>
      <ProfileComponent
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
    </ProfileContainer>
  )
}
