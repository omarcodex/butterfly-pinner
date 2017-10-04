import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageWrapper from '../components/PageWrapper';
import SightingFormContainer from '../components/SightingForm/SightingFormContainer';

const Sighting = () => (
  <div>
    <Navbar />
    <PageWrapper>
      <SightingFormContainer className="sighting-form" />
    </PageWrapper>
  </div>
);

export default Sighting;
