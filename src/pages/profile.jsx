import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageWrapper from '../components/PageWrapper';
import UserProfileContainer from '../components/UserProfile/UserProfileContainer';

const Profile = () => (
  <div>
    <Navbar />
    <PageWrapper>
      <UserProfileContainer />
    </PageWrapper>
  </div>
);

export default Profile;
