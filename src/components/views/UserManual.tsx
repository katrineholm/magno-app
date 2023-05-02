import React, { MutableRefObject, useRef } from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Container, Paper, Typography, IconButton, Button } from '@material-ui/core';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ReactToPrint from 'react-to-print';
import List from '@mui/material/List';
import { ListItemText } from '@mui/material';

const styles = (theme: any) => ({
  container: {
    marginTop: theme.spacing(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallerText: {
    fontSize: '12px',
    color: 'grey', 
  },
  titleAccordian: {
    margin: 2
  },
  printButton: {
    borderRadius: 7, 
    margin: 30,
  },
  accordionDetails: {
    display: 'block',
    justifyContent: 'center',
  },
  accordionDetailsButton: {
    display: 'flex', 
    marginTop: '20px', 
    width: '100%', 
    justifyContent: 'center', 
    alignContent: 'center', 
  },
  header: {
    fontSize: '20px',
    marginTop: 10
  },
  generalTypography: {
    marginBottom: '10px'
  },
  list: {
    paddingLeft: 20
  }
  
});

/**
 *
 *
 * @export
 * @returns
 */
const UserManual = observer( (props: any) => {
  const {classes} = props;
  const componentRefTests = useRef(null);
  const componentRefStudents = useRef(null);
  const componentRefClasses = useRef(null);

    return (
                
     <Container maxWidth="xl" className={classes.container}>

        <Paper >
          <Accordion ref={componentRefTests}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <div className={classes.titleAccordian}>
              <Typography>{props.translation.userManual.tests}</Typography>
              <Typography className={classes.smallerText}>{props.translation.userManual.testsSubHeader}</Typography>
            </div>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails} >
                <Typography>{props.translation.userManual.testText}</Typography>
                <Typography className={classes.smallerText}>{props.translation.userManual.testPoint1}</Typography>
                <Typography className={classes.smallerText}>{props.translation.userManual.testPoint2}</Typography>
                <Typography className={classes.smallerText}>{props.translation.userManual.testPoint3}</Typography>

                <Typography className={classes.header}>{props.translation.userManual.motionTest}</Typography>
                <Typography>{props.translation.userManual.motionSummary}</Typography>
                <Typography>{props.translation.userManual.motionDescription}</Typography>

                <Typography>{props.translation.userManual.motionPointsIntro}</Typography>
                <List sx={{ listStyleType: 'disc' , paddingLeft: 5}}>
                    <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.motionPoint1}</ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.motionPoint2}</ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.motionPoint3}</ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.motionPoint4}</ListItemText>
                </List>

                <Typography className={classes.header}>{props.translation.userManual.formFixedTest}</Typography>
                <Typography>{props.translation.userManual.formFixedDescription}</Typography>
                <Typography>{props.translation.userManual.formFixedPointsIntro}</Typography>
                <List sx={{ listStyleType: 'disc' , paddingLeft: 5}}>
                    <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formFixedPoint1}</ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formFixedPoint2}</ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formFixedPoint3}</ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formFixedPoint4}</ListItemText>
                </List>

                <Typography className={classes.header}>{props.translation.userManual.formFixedTest}</Typography>
                <Typography>{props.translation.userManual.formFixedDescription}</Typography>


                <div className={classes.accordionDetailsButton}>
                    <ReactToPrint 
                    trigger={() => 
                        <Button aria-label="print" 
                        disableElevation
                        variant={"contained"}
                        color={'primary'} 
                        className={classes.printButton}>
                        <LocalPrintshopIcon />
                        <Typography variant="caption">&nbsp; {props.translation.userManual.printButton}</Typography>
                        </Button>
                    }
                    content={() => componentRefTests.current}
                    documentTitle='Magno brukermanual'
                    pageStyle="print"
                    />
                </div>
            </AccordionDetails>
          </Accordion >
          <Accordion ref={componentRefStudents}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
            <div className={classes.titleAccordian}>
              <Typography>{props.translation.userManual.students}</Typography>
              <Typography className={classes.smallerText}>{props.translation.userManual.studentsSubHeader}</Typography>
            </div>
            </AccordionSummary>
            <AccordionDetails  className={classes.accordionDetails}>
              <Typography>
                {props.translation.userManual.studentsDescription}
              </Typography>
              <div className={classes.accordionDetailsButton}>
                    <ReactToPrint 
                    trigger={() => 
                        <Button aria-label="print" 
                        disableElevation
                        variant={"contained"}
                        color={'primary'} 
                        className={classes.printButton}>
                        <LocalPrintshopIcon />
                        <Typography variant="caption">&nbsp; {props.translation.userManual.printButton}</Typography>
                        </Button>
                    }
                    content={() => componentRefStudents.current}
                    documentTitle='Magno brukermanual'
                    pageStyle="print"
                    />
                </div>
            </AccordionDetails>
          </Accordion>
          <Accordion ref={componentRefClasses}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
            <div className={classes.titleAccordian}>
              <Typography>{props.translation.userManual.classOverview}</Typography>
              <Typography className={classes.smallerText}>{props.translation.userManual.classesSubHeader}</Typography>
            </div>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Typography>
               {props.translation.userManual.classesDescription}
              </Typography>
              <div className={classes.accordionDetailsButton}>
                    <ReactToPrint 
                    trigger={() => 
                        <Button aria-label="print" 
                        disableElevation
                        variant={"contained"}
                        color={'primary'} 
                        className={classes.printButton}>
                        <LocalPrintshopIcon />
                        <Typography variant="caption">&nbsp;  {props.translation.userManual.printButton}</Typography>
                        </Button>
                    }
                    content={() => componentRefClasses.current}
                    documentTitle='Magno brukermanual'
                    pageStyle="print"
                    />
                </div>
            </AccordionDetails>
          </Accordion>

          </Paper>
        </Container>

  );
});

export default withStyles(styles)(UserManual);