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
import MagnoLogo from '../files/magno-logo.png';
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
    height: 180,
    width: 400,
  },
});

/**
 *
 *
 * @export
 * @returns
 */
const Home = observer( (props: any) => {
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
            <Grid direction="column"
                  alignItems="center"
                  justifyContent="center" 
                  container 
                  spacing={3}
                  >
              <img src={MagnoLogo} width={"400px"}alt="Magno logo"></img>
              <Grid item xs={4} md={4} lg={4} xl={4}>
                <Paper className={fixedHeightPaper}>
                  <h4>Start en test</h4>
                  {""}
                </Paper>
              </Grid>
              <Grid item xs={4} md={4} lg={4} xl={4}>
                <Paper className={fixedHeightPaper}>
                  {""}
                </Paper>
              </Grid>
              <Grid item xs={4} md={4} lg={4} xl={4}>
                <Paper className={fixedHeightPaper}>
                  {""}
                </Paper>
              </Grid>
            </Grid>
          </Container>
      </div>
    );
  });

export default withStyles(styles)(Home);