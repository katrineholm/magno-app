import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { useCookies } from 'react-cookie';
import MagnoLogo from '../files/magno-logo.png';
import {
  useNavigate,
} from "react-router-dom";
import { authenticate, authenticateUser } from './Communicator';
import  ActionAreaCard from './Card'
import AssessmentIcon from '@material-ui/icons/Assessment';
import PeopleIcon from '@material-ui/icons/People';

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
  const [cookies, setCookie] = useCookies(['c_user']);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const iconStyles = {
    fontSize: '82px',
  };

  useEffect(() => {
    if (!authenticated){
      if (cookies.c_user === undefined){
        navigate("/login");
      }
      else{
        authenticate(cookies, setCookie, setAuthenticated);
      }
    }
  }, [authenticated]);
  
  if (!props.store.userStore.loginStatus){
    navigate("/login");
  }
  
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
              <Grid item xs={4} md={4} lg={4} xl={4}>
              <img src={MagnoLogo} width={"400px"}alt="Magno logo"></img>
                  <ActionAreaCard 
                    header={"Start en test"} 
                    text={"Lar deg velge og starte forskjellige tester."} 
                    buttonText={"Se og start tester"}
                    icon={<AssessmentIcon color="primary" style={iconStyles} />}
                    route={"/tests"}>
                  </ActionAreaCard>
              </Grid>
              <Grid item xs={4} md={4} lg={4} xl={4}>
              <ActionAreaCard 
                    header={"Elevoversikt"} 
                    text={"Se en oversikt over elevene ved skolen din og " +
                    "resultatene deres, eller legg til eller fjern elever fra oversikten. "} 
                    buttonText={"Se oversikt over elever"}
                    icon={<PeopleIcon color="primary" style={iconStyles} />}
                    route={"/students"}>
                  </ActionAreaCard>
              </Grid>
              <Grid item xs={4} md={4} lg={4} xl={4}>
              <ActionAreaCard 
                    header={"Siste resultater"} 
                    text={"Se resultatene fra de siste testene som har blitt gjennomført."} 
                    buttonText={"Se nye resultater"}
                    icon={<AssessmentIcon color="primary" style={iconStyles} />}
                    route={"/students/sort-by-date"}>
                  </ActionAreaCard>
              </Grid>
            </Grid>
          </Container>
      </div>
    );
  });

export default withStyles(styles)(Home);