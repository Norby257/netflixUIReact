import React from 'react'; 
import ProfilePic from './ProfilePic.png'
// photo credit here Photo by Daniel Apodaca on Unsplash 
export default class UserProfile extends React.Component {
   render() {
       return (
        <div className="UserProfile">
        <div className="User">
          <div className="name">Norby</div>
          <div className="image"><img src={ProfilePic} alt="profile by Daniel Apodaca on Unsplash " /></div>
        </div>
      </div>
       )
   }
}