import ProfilePicture from './ProfilePicture'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Button from './Button'
import '../styles/profile.css'

function Profile() {
  return (
    <div className="profile">
      <ProfilePicture />
      <AboutMe />
      <Skills />
      <Button />
    </div>
  );
}

export default Profile