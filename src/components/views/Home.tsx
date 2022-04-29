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

const styles = (theme: any) => ({
  container: {
    marginTop: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column' as "column",
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
          <Container maxWidth="xl" className={classes.container}>
            <Grid direction="column"
                alignItems="center"
                justifyContent="center" 
                container 
                spacing={3}
                >
                <Grid item xs={4} md={4} lg={4} xl={4}>
                    <img src={MagnoLogo} className={classes.img}alt="Magno logo"></img>
                </Grid>
                <Grid item xs={4} md={4} lg={4} xl={4}>
                    <ActionNavigationCard 
                        header={"Start en test"} 
                        text={"Lar deg velge og starte forskjellige tester."} 
                        buttonText={"Se og start tester"}
                        icon={<AssignmentIcon color="primary" style={iconStyles} />}
                        route={"/tests"}>
                    </ActionNavigationCard>
                </Grid>
                <Grid item xs={4} md={4} lg={4} xl={4}>
                    <ActionNavigationCard 
                        header={"Elevoversikt"} 
                        text={"Se en oversikt over elevene ved skolen din og " +
                        "resultatene deres, eller legg til eller fjern elever fra oversikten. "} 
                        buttonText={"Se oversikt over elever"}
                        icon={<PeopleIcon color="primary" style={iconStyles} />}
                        route={"/students"}>
                    </ActionNavigationCard>
                </Grid>
                <Grid item xs={4} md={4} lg={4} xl={4}>
                    <ActionNavigationCard 
                        header={"Siste resultater"} 
                        text={"Se resultatene fra de siste testene som har blitt gjennomført."} 
                        buttonText={"Se nye resultater"}
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