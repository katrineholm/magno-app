import React from 'react';
import logo from './logo.svg';
import {observer} from 'mobx-react';
import { useCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './App.css';


const styles = (theme: any) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
});

export const App = observer( (props: any) =>  {
  const [cookies, removeCookie] = useCookies(['c_user']);
  const {classes} = props;

  return (
    <div className={classes.root}>
      <ToolBars model={props.model}></ToolBars>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
});

export default withStyles(styles)(App);