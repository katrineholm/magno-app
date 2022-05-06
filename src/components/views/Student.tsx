import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
  useNavigate,
} from "react-router-dom";
import FormFixed from '../../files/formfixed50.jpg';
import FormRandom from '../../files/formrandom50.jpg';
import ReportIcon from '@material-ui/icons/Report';
import RiskCard from '../RiskCard';
import ChartCard from '../ChartCard';
import { Box, Paper, Typography } from '@material-ui/core';

const styles = (theme: any) => ({
  container: {
    marginTop: theme.spacing(6),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as "center",
  },
  typography: {
    textAlign: 'center' as "center",
  },
  
});

/**
 *
 *
 * @export
 * @returns
 */
const Student = observer( (props: any) => {
  const {classes} = props;
  const iconStyles = {
    fontSize: '102px',
  };

  function riskIcon(risk: string){
    if (risk === "Lav"){
        return(<ReportIcon htmlColor="#448894" style={iconStyles} />)
    }
    else if (risk === "Middels"){
        return(<ReportIcon htmlColor="#FCA762" style={iconStyles} />)
    }
    else if (risk === "Høy"){
        return(<ReportIcon htmlColor="#E43A4A" style={iconStyles} />)
    }
    else{
        return("")
    }
  }

  function riskText(risk: string){
    if (risk === "Lav"){
        return("Testene indikerer at det er en lav risiko for at eleven kan ha dysleksi.")
    }
    else if (risk === "Middels"){
        return("Testene indikerer at det er en middels risiko for at eleven kan ha dysleksi. " +
               "Det anbefales å sende eleven videre til utredning.")
    }
    else if (risk === "Høy"){
        return("Testene indikerer at det er en høy risiko for at eleven kan ha dysleksi. " + 
               "Det anbefales å sende eleven videre til utredning.")
    }
    else{
        return("Det er ikke gjennomført noen tester med denne eleven enda.")
    }
  }

  return (
    <div>
        
        <Container maxWidth="xl" className={classes.container}>
            <Typography variant="h5">
                {props.store.studentStore.student.name}
            </Typography>
            <Typography style={{paddingBottom: 8}} variant="h5">
                {props.store.studentStore.student.grade}
            </Typography>
            <Grid direction="row"
                alignItems="center"
                justifyContent="center" 
                container 
                spacing={6}
            >
                <Grid item style={{justifySelf: 'center', justifyContent: 'center'}} xs={4} md={4} lg={4} xl={4}>
                    <RiskCard 
                        icon={riskIcon(props.store.studentStore.student.risk)}
                        risk={props.store.studentStore.student.risk}
                        text={riskText(props.store.studentStore.student.risk)} 
                    />
                </Grid>
            </Grid>
            <Grid direction="row"
                alignItems="center"
                justifyContent="center" 
                container 
                spacing={6}
            >
                <Grid item xs={4} md={4} lg={4} xl={4}>
                    <ChartCard 
                        header={"Motion Test"} 
                        text={"Magno bevegelsestest tester den magnocellulære kapasiteten til eleven"} 
                        buttonText={"Start test"}
                        riskScores={props.store.studentStore.student.motion_test}
                        >
                    </ChartCard>
                </Grid>
                <Grid item xs={4} md={4} lg={4} xl={4}>
                    <ChartCard 
                        header={"Fixed Form Test"} 
                        text={"Magno fiksertformtest tester den magnocellulære kapasiteten til eleven"} 
                        buttonText={"Start test"}
                        riskScores={props.store.studentStore.student.fixed_form_test}>
                    </ChartCard>
                </Grid>
                <Grid item xs={4} md={4} lg={4} xl={4}>
                    <ChartCard 
                        header={"Random Form Test"} 
                        text={"Magno tilfeldigformtest tester den magnocellulære kapasiteten til eleven"} 
                        buttonText={"Start test"}
                        riskScores={props.store.studentStore.student.random_form_test}>
                    </ChartCard>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
});

export default withStyles(styles)(Student);