/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import MuiListItem from "@material-ui/core/ListItem";
import withStyles from '@material-ui/styles/withStyles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Divider } from '@material-ui/core';
//import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
//import { logoutAccount } from '../Communicator'
import { clearToken } from '../../utils/tokens.js';

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
  //const [cookies, setCookie, removeCookie] = useCookies(['c_user']);
  const navigate = useNavigate();

  function handleClick() {
    //logoutAccount(props.store.userStore.userEmail);
    //removeCookie('c_user')
    clearToken();
    props.store.userStore.setLoginStatus(false);
    navigate("/login")
  }


  return (
    <div>
      <Divider />
        <ListItem style={{paddingTop: 14}}button onClick={handleClick}>
          <ListItemIcon>
              <ExitToAppIcon/>
          </ListItemIcon>
        <ListItemText primary="Logg ut"/>
      </ListItem>
          
    </div>
    );
  }

export default LogOutListItems;
