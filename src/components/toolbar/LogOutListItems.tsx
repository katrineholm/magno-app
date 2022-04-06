/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import MuiListItem from "@material-ui/core/ListItem";
import withStyles from '@material-ui/styles/withStyles';
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

const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#C0CFD5",
      color: "#33373A",
      "& .MuiListItemIcon-root": {
        color: "#33373A"
      }
    },
    "&$selected:hover": {
      backgroundColor: "#acbabf",
      color: "#33373A",
      "& .MuiListItemIcon-root": {
        color: "#33373A"
      }
    },
    "&:hover": {
      backgroundColor: "#DCE1E7",
      color: "#33373A",
      "& .MuiListItemIcon-root": {
        color: "#33373A"
      }
    }
  },
  selected: {}
})(MuiListItem);

function LogOutListItems(props: any){
  const [cookies, setCookie, removeCookie] = useCookies(['c_user']);
  const navigate = useNavigate();
  function handleClick() {
    removeCookie('c_user')
    props.store.userStore.setLoginStatus(false);
    navigate("/login")
  }


  return (
    <div>
        <Divider />
        <List>
          <ListSubheader inset>Min konto</ListSubheader>
            <ListItem button onClick={() => navigate('/account')}>
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
              <ListItemText primary="Innstillinger"/>
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                  <ExitToAppIcon/>
              </ListItemIcon>
            <ListItemText primary="Logg ut"/>
          </ListItem>
            
        </List>
    </div>
    );
  }

export default LogOutListItems;
