import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from "material-ui/RaisedButton";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';
import firebase from "../javascripts/firebase";

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleToggle = () => this.setState({open: !this.state.open});

  // handleNotification = () => 

  handleClose = () => this.setState({open: false});

  handleSignout(e) {
    const promise = firebase.auth().signOut();
    promise.then(
      // e => this.handleNotification("Succesfully logged out!")
    );
  }

  render(){
    return(
      <div>
        <Navbar handleToggle={this.handleToggle} handleSignout={this.handleSignout}/>
        <SlideOutMenu open={this.state.open} handleClose={this.handleClose} handleToggle={this.handleToggle}/>
      </div>
    )
  }
}

const SlideOutMenu = (props) => {
  return(
    <Drawer
      docked={false}
      width={200}
      open={props.open}
      onRequestChange={props.handleToggle}
    >
      <Link to="/">
        <MenuItem
          onClick={props.handleClose}
          leftIcon={<FontIcon className="material-icons">home</FontIcon>}
        >
          Home
        </MenuItem>
      </Link>
      <Link to="/guide">
        <MenuItem
          onClick={props.handleClose}
          leftIcon={<FontIcon className="material-icons">style</FontIcon>}
        >
          Guide 
        </MenuItem>
      </Link>
      <Link to="/sighting">
        <MenuItem
          onClick={props.handleClose}
          leftIcon={<FontIcon className="material-icons">party_mode</FontIcon>}
        >
          Sighting
        </MenuItem>
      </Link>
    </Drawer>
  )
}

const Navbar = (props) => {
  return(
    <AppBar
      title="Butterfly Pinner"
      onLeftIconButtonTouchTap={props.handleToggle}
      iconElementRight={firebase.auth().currentUser ? <UserMenu handleSignout={props.handleSignout}/> : <LoginButton />}      
    />
  )
}

const UserMenu = (props) => {
  return(
    <IconMenu
      iconStyle={{color: "white"}}
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    >
      <Link to="/profile">
        <MenuItem primaryText="Profile" />
      </Link>
      <MenuItem
        primaryText="Log Out"
        onClick={props.handleSignout}
      />
    </IconMenu>
  )
}

const LoginButton = () => {
  return(
  <Link to="/login">
    <RaisedButton
      style={{color: "white"}}
      label="Log In"
    />
  </Link>
  )
}

export default Navigation;