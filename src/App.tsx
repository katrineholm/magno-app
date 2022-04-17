import React from 'react';
import {observer} from 'mobx-react';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import './App.css';
import ToolBars from './components/toolbar/ToolBars';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/views/Login'
import Register from './components/views/Register'
import Home from './components/views/Home'
import Theme from './components/Theme'
import Tests from './components/views/Tests';


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
  const {classes} = props;
  
  return (
    <div className={classes.root}>
      <ThemeProvider theme={Theme}>
          <ToolBars store={props.store}></ToolBars>
          <>
          <main className={classes.content}>
          <Routes>
            <Route path ="/" element={<Navigate to="/login" />} />
            <Route path ="/home" element={<Home store={props.store}/>} />
            <Route path="/login" element={<Login store={props.store}/>} />
            <Route path="/register" element={<Register store={props.store}/>} />
            <Route path="/tests" element={<Tests store={props.store}/>} />
          </Routes>
          </main>
          </>
          </ThemeProvider>
        </div>
  );
});

export default withStyles(styles)(App);