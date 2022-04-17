import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useCookies } from 'react-cookie';
import {
  useNavigate,
} from "react-router-dom";
import { authenticate } from '../Communicator';
import  ActionTestCard from '../ActionTestCard'
import PeopleIcon from '@material-ui/icons/People';
import PieChartIcon from '@material-ui/icons/PieChart';
import AssignmentIcon from '@material-ui/icons/Assignment';

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
    paddingTop: theme.spacing(6),
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
const Tests = observer( (props: any) => {
  const {classes} = props;
  const [cookies, setCookie] = useCookies(['c_user']);
  const navigate = useNavigate();
  const iconStyles = {
    fontSize: '82px',
  };

  useEffect(() => {
    const authFunction = async () => {
      const validUser = await authenticate(cookies, setCookie);
      if (!validUser){
        navigate("/login")
      }
      else{
        props.store.userStore.setLoginStatus(true)
      }
    }
    authFunction();
  }, []);
  
    return (
      
      <div>
        <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <Grid direction="column"
                  alignItems="center"
                  justifyContent="center" 
                  container 
                  spacing={5}
                  >
              <Grid direction="row"
                    alignItems="center"
                    justifyContent="center" 
                    container
              >
                <Grid item xs={4} md={4} lg={4} xl={4}>
                  <ActionTestCard 
                      header={"Start en test"} 
                      text={"Lar deg velge og starte forskjellige tester."} 
                      buttonText={"Se og start tester"}
                      icon={<AssignmentIcon color="primary" style={iconStyles} />}
                      route={"/tests"}>
                  </ActionTestCard>
                </Grid>
                <Grid item xs={4} md={4} lg={4} xl={4}>
                  <ActionTestCard 
                      header={"Elevoversikt"} 
                      text={"Se en oversikt over elevene ved skolen din og " +
                      "resultatene deres, eller legg til eller fjern elever fra oversikten. "} 
                      buttonText={"Se oversikt over elever"}
                      icon={<PeopleIcon color="primary" style={iconStyles} />}
                      route={"/students"}>
                  </ActionTestCard>
                </Grid>
              </Grid>
              <Grid item xs={4} md={4} lg={4} xl={4}>
                <ActionTestCard 
                    header={"Siste resultater"} 
                    text={"Se resultatene fra de siste testene som har blitt gjennomført."} 
                    buttonText={"Se nye resultater"}
                    icon={<PieChartIcon color="primary" style={iconStyles} />}
                    route={"/students/sort-by-date"}>
                  </ActionTestCard>
              </Grid>
            </Grid>
          </Container>
      </div>
    );
  });

export default withStyles(styles)(Tests);