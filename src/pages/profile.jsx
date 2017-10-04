import React from 'react';
import Navigation from '../components/Navigation';
import PageWrapper from '../components/PageWrapper';
import UserProfileContainer from '../components/UserProfile/UserProfileContainer';

const Profile = () => (
  <div>
    <Navigation />
    <PageWrapper>
      <UserProfileContainer />
    </PageWrapper>
  </div>
);

export default Profile;
