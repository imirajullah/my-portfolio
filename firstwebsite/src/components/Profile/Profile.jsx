import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> Miraj Ullah</p>
        <p><strong>Email:</strong> mirajullah95@gmail.com</p>
        <p><strong>Phone:</strong> 0302-5726233</p>
        <p><strong>Location:</strong> Samar Bagh, Dir Lower, Pakistan</p>
        <p><strong>Role:</strong> Junior Web Developer</p>
      </div>
    </div>
  );
};

export default Profile;
