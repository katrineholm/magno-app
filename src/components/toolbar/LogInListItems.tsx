/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {observer} from 'mobx-react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useNavigate } from 'react-router-dom';


const LogInListItems = observer( (props: any) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/login')
  }
    return (
      <div>
        <Divider />
        <List>
        <ListSubheader inset>My Account</ListSubheader>
          <ListItem button onClick={() => handleClick()}>
              <ListItemIcon >
                  <AccountBoxIcon/>
              </ListItemIcon>
            <ListItemText primary="Login"/>
          </ListItem>
          </List>
      </div>
    );
})

export default LogInListItems;
