import React, { Component } from 'react';
import styled from 'styled-components';
import LoginFormContainer from '../components/LoginForm/LoginFormContainer';
import Home from './home';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top right, #457cdb, #5998dd);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.triggerRedirect = this.triggerRedirect.bind(this);
    this.state = {
      redirect: false
    };
  }

  triggerRedirect() {
    console.log('triggerRedirect!');
    this.setState({
      redirect: true
    });
  }

  render() {
    switch (this.state.redirect) {
      case false:
        return (
          <Wrapper>
            <Div>
              <H2>Log in to your account</H2>
              <LoginFormContainer triggerRedirect={this.triggerRedirect} />
            </Div>
          </Wrapper>
        );
      default:
        return <Home />;
    }
  }
}

export default Login;
