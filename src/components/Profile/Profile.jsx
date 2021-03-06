import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer/>
    </div>
  )
}

export default Profile