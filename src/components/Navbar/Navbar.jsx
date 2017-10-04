import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import firebase, { auth } from '../../javascripts/firebase';
import SlideOutMenu from './SlideOutMenu';
import UserMenu from './UserMenu';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  handleSignout(e) {
    const promise = auth.signOut();
    promise.then();
  }

  render() {
    return (
      <div>
        <Nav
          handleToggle={this.handleToggle}
          handleSignout={this.handleSignout}
        />
        <SlideOutMenu
          open={this.state.open}
          handleClose={this.handleClose}
          handleToggle={this.handleToggle}
        />
      </div>
    );
  }
}

const Nav = props => {
  return (
    <AppBar
      title="Butterfly Pinner"
      onLeftIconButtonTouchTap={props.handleToggle}
      iconElementRight={
        auth.currentUser ? (
          <UserMenu handleSignout={props.handleSignout} />
        ) : (
          <LoginButton />
        )
      }
    />
  );
};

const LoginButton = () => {
  return (
    <Link to="/login">
      <RaisedButton style={{ color: 'white' }} label="Log In" />
    </Link>
  );
};

export default Navbar;
