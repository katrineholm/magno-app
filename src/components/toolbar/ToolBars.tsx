/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React,  { CSSProperties } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MainListItems from './MainListItems';
import LogInListItems from './LogInListItems'
import LogOutListItems from './LogOutListItems'

const drawerWidth = 240;

// eslint-disable-next-line no-shadow
const styles = (theme: any) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative' as "relative",
    whiteSpace: 'nowrap' as "nowrap",
    height: '100vh',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden' as "hidden",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column' as "column",
  },
  fixedHeight: {
    height: 240,
  },
});
/* ToolBars renders the menus, and toolbars in addition to what is currently being viewed.
*
*
*
*
*
*/
const ToolBars = observer( (props: any) => {
      const { classes } = props;
      let sign_option;
      let menu_items1;
      let menu_items2 = '';
      if (props.store.userStore.loginStatus){
          menu_items1 = <MainListItems store={props.store}/>
          sign_option = <LogOutListItems store={props.store}/>
      } else{
          menu_items1 = ''
          menu_items2 = ''
          sign_option = <LogInListItems store={props.store}/>
      }
      return (
        <div>
          <CssBaseline />
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !props.store.viewStore.drawerState && classes.drawerPaperClose),
            }}
            open={props.store.viewStore.drawerState}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={() => props.store.viewStore.handleDrawerOpen(props.store.viewStore.drawerState)}>
                {props.store.viewStore.drawerState ? <ChevronLeftIcon/> : <ChevronRightIcon/> }
              </IconButton>
            </div>
            {menu_items1}
            {menu_items2}
            {sign_option}
          </Drawer>
        </div>
      );
  })



export default withStyles(styles)(ToolBars);
