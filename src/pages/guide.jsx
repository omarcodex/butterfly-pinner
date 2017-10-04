import React from 'react';
import Navigation from '../components/Navigation';
import PageWrapper from '../components/PageWrapper';
import GuideContainer from '../components/Guide/GuideContainer';

const Guide = () => (
  <div>
    <Navigation />
    <PageWrapper>
      <GuideContainer />
    </PageWrapper>
  </div>
);

export default Guide;
