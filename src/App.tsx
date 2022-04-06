import React from 'react';
import logo from './logo.svg';
import {observer} from 'mobx-react';
import { useCookies } from 'react-cookie';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './App.css';
import ToolBars from './components/toolbar/ToolBars';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Theme from './components/Theme'


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
  const checked = true;
  return (
    <div className={classes.root}>
      <ThemeProvider theme={Theme}>
          <ToolBars store={props.store}></ToolBars>
          {checked ? 
          <>
          <main className={classes.content}>
          <Routes>
            <Route path="/" element={!props.store.userStore.loginStatus ? 
              <Navigate to="/login" /> : <Navigate to="/home"/>}>
            </Route>
            <Route path ="/home" element={<Home store={props.store}/>} />
            <Route path="/login" element={<Login store={props.store}/>} />
            <Route path="/register" element={<Register store={props.store}/>} />
          </Routes>
          </main>
          </>
          : "loading"}
          </ThemeProvider>
        </div>
  );
});

export default withStyles(styles)(App);