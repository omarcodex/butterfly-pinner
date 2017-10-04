import React from 'react';
import Navigation from '../components/Navigation';
import PageWrapper from '../components/PageWrapper';
import SightingFormContainer from '../components/SightingForm/SightingFormContainer';

const Sighting = () => (
  <div>
    <Navigation />
    <PageWrapper>
      <SightingFormContainer className="sighting-form" />
    </PageWrapper>
  </div>
);

export default Sighting;
