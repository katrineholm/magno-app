import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
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
import StudentInformationPage from './StudentInformationPage';
import StudentResultPage from './StudentResultPage';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import "../css/styles.css";
// import { withStyles } from '@material-ui/core/styles';

// CSS: 
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
    root: {
        "&:hover": {
            backgroundColor: "#DCE1E7",
            color: "#33373A"
        }
    },
    selected: {
        "&$selected": {
            backgroundColor: "#C0CFD5",
            color: "#33373A"
        },
        "&$selected:hover": {
            backgroundColor: "#acbabf",
            color: "#33373A"
        }
    }
});

/**
 *
 *
 * @export
 * @returns
 */
const Student = observer((props: any) => {
    const { classes } = props;
    const resultPage = "resultPage";
    const infoPage = "infoPage";
    const StyledButton = withStyles(styles)(Button);

    const [activeButton, setActiveButton] = useState(resultPage);
    const iconStyles = {
        fontSize: '102px',
    };

    function riskIcon(risk: string) {
        if (risk === "Lav") {
            return (<ReportIcon htmlColor="#448894" style={iconStyles} />)
        }
        else if (risk === "Middels") {
            return (<ReportIcon htmlColor="#FCA762" style={iconStyles} />)
        }
        else if (risk === "Høy") {
            return (<ReportIcon htmlColor="#E43A4A" style={iconStyles} />)
        }
        else {
            return ("")
        }
    }

    function riskText(risk: string) {
        if (risk === "Lav") {
            return (props.translation.student.riskLow)
        }
        else if (risk === "Middels") {
            return (props.translation.student.riskMedium)
        }
        else if (risk === "Høy") {
            return (props.translation.student.riskHigh)
        }
        else {
            return (props.translation.student.riskNone)
        }
    }

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    }

    return (
        <div>

            <Container maxWidth="xl" className={classes.container}>
                <Typography variant="h5">
                    {props.store.studentStore.student.name}
                </Typography>
                <Typography style={{ paddingBottom: 8 }} variant="h5">
                    {props.store.studentStore.student.grade}
                </Typography>
                <Grid direction="row"
                    alignItems="center"
                    justifyContent="center"
                    container
                    spacing={6}

                >
                    <Grid item style={{ justifySelf: 'center', justifyContent: 'center' }} xs={10} md={8} lg={4} xl={4}>
                        <RiskCard
                            icon={riskIcon(props.store.studentStore.student.risk)}
                            risk={props.store.studentStore.student.risk}
                            text={riskText(props.store.studentStore.student.risk)}
                        />
                    </Grid>
                </Grid>
                {/* <Grid direction="row"
                    alignItems="center"
                    justifyContent="center"
                    container
                    spacing={6}
                    style={{ backgroundColor: 'blue' }} */}
                {/* > */}

                {/* <Grid item style={{ justifySelf: 'center', justifyContent: 'center' }}> */}
                {/* <Button
                    style={{ backgroundColor: activeButton === resultPage ? 'grey' : 'white', color: activeButton === resultPage ? 'white' : 'black' }}
                    className={activeButton === resultPage ? 'button-clicked' : 'button-not-clicked'}
                    onClick={() => handleButtonClick(resultPage)}
                >
                    Resultater
                </Button>
                <Button
                    style={{ backgroundColor: activeButton === infoPage ? 'grey' : 'white', color: activeButton === infoPage ? 'white' : 'black' }}
                    className={activeButton === infoPage ? 'button-clicked' : 'button-not-clicked'}
                    onClick={() => handleButtonClick(infoPage)}
                >
                    Informasjon
                </Button> */}
                {/* <StyledButton
                    className={activeButton === resultPage ? classes.selected : classes.root}
                    onClick={() => handleButtonClick(resultPage)}
                >
                    Resultater
                </StyledButton>
                <StyledButton
                    className={activeButton === infoPage ? classes.selected : classes.root}
                    onClick={() => handleButtonClick(infoPage)}
                >
                    Informasjon
                </StyledButton> */}
                <StyledButton
                    className={activeButton === resultPage ? classes.selected : classes.root}
                    onClick={() => handleButtonClick(resultPage)}
                >
                    Resultater
                </StyledButton>
                <StyledButton
                    className={activeButton === infoPage ? classes.selected : classes.root}
                    onClick={() => handleButtonClick(infoPage)}
                >
                    Informasjon
                </StyledButton>
                {/* </Grid> */}
                {activeButton === resultPage && <StudentResultPage translation={props.translation} store={props.store} />}
                {activeButton === infoPage && <StudentInformationPage prop1='Info' prop2={2} />}

                {/* </Grid> */}
            </Container>
        </div>
    );
});

export default withStyles(styles)(Student);