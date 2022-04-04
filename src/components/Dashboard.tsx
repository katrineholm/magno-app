import React, {useState} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import {
  useNavigate,
} from "react-router-dom";


const drawerWidth = 240;

const styles = (theme: any) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
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

/**
 *
 *
 * @export
 * @returns
 */
const Dashboard = observer( (props: any) => {
  const {classes} = props;
  const navigate = useNavigate();
  if (!props.store.userStore.loginStatus){
    navigate("/login");
  }
  //client = new CosmosClient({ endpoint, key });
  const fixedHeightPaper = clsx(props.classes.paper, props.classes.fixedHeight);
  
    return (
      <div>
        <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                </Paper>
              </Grid>
              {/* Scheduled Update */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  {""}
                </Paper>
              </Grid>
              {/* Recent Program Runs */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  {""}
                </Paper>
              </Grid>
              {/* Recent Patches */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  {""}
                </Paper>
              </Grid>
            </Grid>
          </Container>
      </div>
    );
  });

export default withStyles(styles)(Dashboard);