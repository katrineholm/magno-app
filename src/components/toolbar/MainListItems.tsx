/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import { useNavigate } from 'react-router-dom';

/**
 *  MainListItems renders the icons and names of the left hand side menu
 *  The onClick method is passed up to ToolBars and further up to App.js
 *  which then changes the view in stateStore
 *  App.js then changes it's own state and rerenders with the new view.
 */
const MainListItems = observer( (props: any) => {
  const navigate = useNavigate();

  function RenderList(){

    if (props.store.userStore.loginStatus === false){
      return (<></>);
    }
    else {
      return(
        <>
          <ListItem button onClick={() => navigate('/scholar/dashboard')}>
            <ListItemIcon >
              <DashboardIcon />
            </ListItemIcon>
              <ListItemText primary="Dashboard" />
          </ListItem> 
          <ListItem button onClick={() => navigate('/scholarship')}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
              <ListItemText primary="My Scholarship"/>
            </ListItem> 
          <ListItem button onClick={() => navigate('/handbook')}>
            <ListItemIcon>
              <MenuBookIcon/>
            </ListItemIcon>
            <ListItemText primary="Tips and tricks"/>
          </ListItem>
        </>
      )
    }
  }

  return (
      <div>
          <Divider />
          <List>
            <RenderList />
            <ListItem button onClick={() => navigate('/leaderboard')}>
            <ListItemIcon>
              <EmojiEventsIcon/>
            </ListItemIcon>
            <ListItemText primary="Leaderboard"/>
          </ListItem>
          </List>
      </div>
    );
  }
)

export default MainListItems;
