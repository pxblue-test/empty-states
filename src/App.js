// React/Material/PXBlue Basics
import { NavLink } from 'react-router-dom'
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './style.css';

// Main routing controller
import Main from './router/main';

// Router for Material-UI tabs
const TabNavLink = React.forwardRef((props, ref) => (<NavLink {...props} innerRef={ref} />));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: 0
    }
  }

  handleChange = (event, value) => {
    this.setState({ tabSelected: value });
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6">Empty States</Typography>
          </Toolbar>

          <Tabs value={this.state.tabSelected} onChange={this.handleChange}>
            <Tab label={"Action"} component={TabNavLink} to={"/action"} />
            <Tab label={"Text Only"} component={TabNavLink} to={"/text-only"} />
            <Tab label={"Placeholder"} component={TabNavLink} to={"/placeholder"} />
            <Tab label={"Sub-Content"} component={TabNavLink} to={"/sub-content"} />
          </Tabs>
        </AppBar>

        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
          }}
        >
          <Main />
        </div>
      </div>
    );

  }
}

export default (App);