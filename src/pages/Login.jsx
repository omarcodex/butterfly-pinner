import React from 'react';
import styled from 'styled-components';
import LoginFormContainer from '../components/LoginForm/LoginFormContainer';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top right, #457cdb, #5998dd);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H5 = styled.h5`
  color: #457cdb;
  text-align: center;
`;

const Div = styled.div`
  padding: 50px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 1px lightgrey;
  max-width: 400px;
`;

const Home = () => (
  <Wrapper>
    <Div>
      <H5>Log in to your account</H5>
      <LoginFormContainer />
    </Div>
  </Wrapper>
);

export default Home;
