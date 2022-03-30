/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


function LogOutListItems(props){
  const [cookies, setCookie, removeCookie] = useCookies(['c_user']);
  const navigate = useNavigate();
  function handleClick() {
    removeCookie('c_user')
    props.model.setLoginStatus(false);
    props.model.initModel();
    navigate("/login")
  }


  return (
    <div>
        <Divider />
        <List>
          <ListSubheader inset>My Account</ListSubheader>
            <ListItem button onClick={() => navigate('/account')}>
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
              <ListItemText primary="Account Settings"/>
            </ListItem>
            {props.model.role === "Scholar" ? 
            <ListItem button onClick={() => navigate('/personal')}>
              <ListItemIcon>
                  <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="Personal Information"/>
            </ListItem> : ""
            }
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                  <ExitToAppIcon/>
              </ListItemIcon>
            <ListItemText primary="Sign Out"/>
          </ListItem>
            
        </List>
    </div>
    );
  }

export default LogOutListItems;
