import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useCookies } from 'react-cookie';
import MagnoLogo from '../../files/magno-logo.png';
import {
  useNavigate,
} from "react-router-dom";
import ActionNavigationCard from '../ActionNavigationCard'
import PeopleIcon from '@material-ui/icons/People';
import PieChartIcon from '@material-ui/icons/PieChart';
import FolderIcon from '@material-ui/icons/Folder';
import MenuBookIcon from '@material-ui/icons/MenuBook';
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

const Home = observer((props: any) => {
  const { classes } = props;
  const iconStyles = {
    fontSize: '82px',
    color: 'primary'
  };

  return (

    <div>
      <Container maxWidth="xl" className={classes.container}>
        <Grid direction="column"
          alignItems="center"
          justifyContent="center"
          container
          spacing={5}
        >
          <Grid item xs={5} md={5} lg={6} xl={6}>
            <img src={MagnoLogo} className={classes.img} alt="Magno logo"></img>
          </Grid>
          <Typography variant="h5" style={{ textAlign: 'center', marginBottom: 10 }}>
            {props.translation.home.title} {props.store.userStore.userName}
          </Typography>
          <Grid item xs={10} md={10} lg={10} xl={10}>
          <Grid direction="row"
                container
                spacing={5}
                  >
          <Grid item xs={10} md={10} lg={6} xl={6} style={{ margin: '0 5xp'}}>
            <ActionNavigationCard
              header={props.translation.home.headerTest}
              text={props.translation.home.textTest}
              buttonText={props.translation.home.buttonTextTest}
              toolbarSelection={1}
              store={props.store}
              icon={<AssignmentIcon color="primary" style={iconStyles} />}
              route={"/tests"}>
            </ActionNavigationCard>
          </Grid>
          <Grid item xs={10} md={10} lg={6} xl={6}  style={{ margin: '0 5xp'}}>
            <ActionNavigationCard
              header={props.translation.home.headerUserManual}
              text={props.translation.home.textUserManual}
              buttonText={props.translation.home.buttonTextUserManual}
              toolbarSelection={4}
              store={props.store}
              icon={<MenuBookIcon color="primary" style={iconStyles} />}
              route={"/usermanual"}>
            </ActionNavigationCard>
          </Grid>
          </Grid>
          </Grid>
          <Grid item xs={10} md={10} lg={10} xl={10}>
          <Grid direction="row"
                container
                spacing={5}
                  >
          <Grid item xs={10} md={10} lg={6} xl={6}  style={{ margin:  '0 5xp'}}>
            <ActionNavigationCard
              header={props.translation.home.headerStudents}
              text={props.translation.home.textStudents}
              buttonText={props.translation.home.buttonTextStudents}
              toolbarSelection={2}
              store={props.store}
              icon={<PeopleIcon color="primary" style={iconStyles} />}
              route={"/students"}>
            </ActionNavigationCard>
          </Grid>
          <Grid item xs={10} md={10} lg={6} xl={6}  style={{ margin: '0 5xp'}}>
            <ActionNavigationCard
              header={props.translation.home.headerClasses}
              text={props.translation.home.textClasses}
              buttonText={props.translation.home.buttonTextClasses}
              toolbarSelection={3}
              store={props.store}
              icon={<FolderIcon color="primary" style={iconStyles} />}
              route={"/classes"}>
            </ActionNavigationCard>
          </Grid>

          </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
});

export default withStyles(styles)(Home);