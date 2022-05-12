import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useCookies } from 'react-cookie';
import MagnoLogo from '../../files/magno-logo.png';
import {
  useNavigate,
} from "react-router-dom";
import { authenticate } from '../Communicator';
import  ActionNavigationCard from '../ActionNavigationCard'
import PeopleIcon from '@material-ui/icons/People';
import PieChartIcon from '@material-ui/icons/PieChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Typography } from '@material-ui/core';

const styles = (theme: any) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  img: {
    width: "100%",
    maxWidth: "450px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }
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
  const navigate = useNavigate();
  const iconStyles = {
    fontSize: '82px',
  };

    return (
      
      <div>
          <Container maxWidth="xl" className={classes.container}>
            <Grid direction="column"
                alignItems="center"
                justifyContent="center" 
                container 
                spacing={3}
                >
                <Grid item xs={10} md={10} lg={6} xl={6}>
                    <img src={MagnoLogo} className={classes.img}alt="Magno logo"></img>
                </Grid>
                <Typography variant="h5" style={{textAlign: 'center'}}>
                Velkommen, {props.store.userStore.userEmail.split('@')[0]}
                </Typography>
                <Grid item xs={10} md={10} lg={6} xl={6}>
                    <ActionNavigationCard 
                        header={"Start en test"} 
                        text={"Lar deg velge og starte forskjellige tester."} 
                        buttonText={"Se og start tester"}
                        toolbarSelection={1}
                        store={props.store}
                        icon={<AssignmentIcon color="primary" style={iconStyles} />}
                        route={"/tests"}>
                    </ActionNavigationCard>
                </Grid>
                <Grid item xs={10} md={10} lg={6} xl={6}>
                    <ActionNavigationCard 
                        header={"Elevoversikt"} 
                        text={"Se en oversikt over elevene ved skolen din og " +
                        "resultatene deres, eller legg til eller fjern elever fra oversikten. "} 
                        buttonText={"Se oversikt over elever"}
                        toolbarSelection={2}
                        store={props.store}
                        icon={<PeopleIcon color="primary" style={iconStyles} />}
                        route={"/students"}>
                    </ActionNavigationCard>
                </Grid>
                <Grid item xs={10} md={10} lg={6} xl={6}>
                    <ActionNavigationCard 
                        header={"Siste resultater"} 
                        text={"Se resultatene fra de siste testene som har blitt gjennomført."} 
                        buttonText={"Se nye resultater"}
                        toolbarSelection={2}
                        store={props.store}
                        icon={<PieChartIcon color="primary" style={iconStyles} />}
                        route={"/students/sort-by-date"}>
                    </ActionNavigationCard>
                </Grid>
            </Grid>
          </Container>
      </div>
    );
  });

export default withStyles(styles)(Home);