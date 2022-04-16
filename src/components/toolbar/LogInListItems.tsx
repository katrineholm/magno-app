/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {observer} from 'mobx-react';
import MuiListItem from "@material-ui/core/ListItem";
import withStyles from '@material-ui/styles/withStyles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
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

const LogInListItems = observer( (props: any) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0 as number);

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
