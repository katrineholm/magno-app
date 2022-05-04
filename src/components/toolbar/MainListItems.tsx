/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import { useNavigate } from 'react-router-dom';
import withStyles from '@material-ui/styles/withStyles';


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

/**
 *  MainListItems renders the icons and names of the left hand side menu
 *  The onClick method is passed up to ToolBars and further up to App.js
 *  which then changes the view in stateStore
 *  App.js then changes it's own state and rerenders with the new view.
 */
const MainListItems = observer( (props: any) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0 as number);

  function handleNavigation(selected: number, destination: string){
    setSelected(selected);
    navigate(destination);
  }

  function RenderList(){

    if (props.store.userStore.loginStatus === false){
      return (<></>);
    }
    else {
      return(
        <>
          <ListItem selected={selected === 0} button onClick={() => handleNavigation(0, '/home')}>
            <ListItemIcon >
              <HomeIcon />
            </ListItemIcon>
              <ListItemText primary="Hjem" />
          </ListItem> 
          <ListItem selected={selected === 1} button onClick={() => handleNavigation(1, '/tests')}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
              <ListItemText primary="Tester"/>
            </ListItem> 
          <ListItem selected={selected === 2} button onClick={() => handleNavigation(2, '/students')}>
            <ListItemIcon>
              <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Elever"/>
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
          </List>
      </div>
    );
  }
)

export default MainListItems;
