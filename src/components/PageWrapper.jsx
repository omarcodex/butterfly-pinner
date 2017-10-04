import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageWrapper = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default PageWrapper;
