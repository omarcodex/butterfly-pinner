import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render(){
    return(
      <div>
        <Navbar handleToggle={this.handleToggle}/>
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
        <MenuItem onClick={props.handleClose}>
          Home
        </MenuItem>
      </Link>
      <Link to="/guide">
        <MenuItem onClick={props.handleClose}>
          Guide 
        </MenuItem>
      </Link>
      <Link to="/sighting">
        <MenuItem onClick={props.handleClose}>
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
    />
  )
}

export default Navigation;