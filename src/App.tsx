import React from 'react';
import logo from './logo.svg';
import {observer} from 'mobx-react';
import { useCookies } from 'react-cookie';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './App.css';
import ToolBars from './components/toolbar/ToolBars';
import {
  Navigate,
  Route,
} from "react-router-dom";
import Login from './components/Login'


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
            {checked ? 
            <>
              <Route path="/">
                {props.store.userStore.loginStatus ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
              </Route>
                <Route path="/dashboard" element={<Dashboard model={props.store}/>}/>
                <main className={classes.content}>
                  <Route path="/login" element ={<Login model={props.store}/> }/>
                  <Route path="/register" element ={<Register model={props.store}/>}/>
              </main>
            </>
            : "loading"}
        </div>
  );
});

export default withStyles(styles)(App);