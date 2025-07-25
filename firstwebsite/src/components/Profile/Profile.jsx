import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> Miraj Ullah</p>
        <p><strong>Email:</strong> mirajullah95@gmail.com</p>
        <p><strong>Linkedin:</strong> www.linkedin.com/in/miraj-ullah-1364ba338 </p>
        <p><strong>Phone:</strong> 0302-5726323</p>
        <p><strong>Location:</strong> Samar Bagh, Dir Lower, Pakistan</p>
        <p><strong>Role:</strong> Junior Web Developer</p>
        <p><strong>Role:</strong> Blogger</p>
        <p><strong>Education:</strong> BS Software engineering (Riphah International University)</p>
        <p><strong>semester</strong> 5th and <strong>CGPA</strong> is 3.87</p>
      </div>
    </div>
  );
};

export default Profile;
