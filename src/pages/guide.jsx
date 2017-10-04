import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageWrapper from '../components/PageWrapper';
import GuideContainer from '../components/Guide/GuideContainer';

const Guide = () => (
  <div>
    <Navbar />
    <PageWrapper>
      <GuideContainer />
    </PageWrapper>
  </div>
);

export default Guide;
