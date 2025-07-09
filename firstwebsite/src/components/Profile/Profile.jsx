import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> Miraj Ullah</p>
        <p><strong>Email:</strong> mirajullah95@gmail.com</p>
        <p><strong>Linkedin:</strong> https://www.linkedin.com/in/miraj-ullah-1364ba338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app </p>
        <p><strong>Phone:</strong> 0302-5726233</p>
        <p><strong>Location:</strong> Samar Bagh, Dir Lower, Pakistan</p>
        <p><strong>Role:</strong> Junior Web Developer</p>
        <p><strong>Education:</strong> BS Software engineering (Riphah International University)</p>
        <p><strong>semester</strong> 5th and <strong>CGPA</strong> is 3.87</p>
      </div>
    </div>
  );
};

export default Profile;
