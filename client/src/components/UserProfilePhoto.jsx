import React from 'react'
import ProfileIcon from '../assets/ProfileIcon.png'
function UserProfilePhoto() {
  return (
    <div>UserProfilePhoto
      <img src={ProfileIcon} alt="User Profile" className="w-16 h-16 rounded-full border-2 border-gray-300" />
    </div>
  )
}

export default UserProfilePhoto