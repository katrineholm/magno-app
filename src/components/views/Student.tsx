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
        return(props.translation.student.riskLow)
    }
    else if (risk === "Middels"){
        return(props.translation.student.riskMedium)
    }
    else if (risk === "Høy"){
        return(props.translation.student.riskHigh)
    }
    else{
        return(props.translation.student.riskNone)
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
                <Grid item style={{justifySelf: 'center', justifyContent: 'center'}} xs={10} md={8} lg={4} xl={4}>
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
                <Grid item xs={10} md={8} lg={4} xl={4}>
                    <ChartCard 
                        header={props.translation.tests.headerMotion} 
                        riskScores={props.store.studentStore.student.tests.motion_test}
                        translation={props.translation}
                        >
                    </ChartCard>
                </Grid>
                <Grid item xs={10} md={8} lg={4} xl={4}>
                    <ChartCard 
                        header={props.translation.tests.headerFixed} 
                        riskScores={props.store.studentStore.student.tests.fixed_form_test}
                        translation={props.translation}
                        >
                    </ChartCard>
                </Grid>
                <Grid item xs={10} md={8} lg={4} xl={4}>
                    <ChartCard 
                        header={props.translation.tests.headerRandom} 
                        riskScores={props.store.studentStore.student.tests.random_form_test}
                        translation={props.translation}
                        >
                    </ChartCard>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
});

export default withStyles(styles)(Student);