import React, { MutableRefObject, useRef } from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Container, Paper, Typography, IconButton, Button, Divider } from '@material-ui/core';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ReactToPrint from 'react-to-print';
import List from '@mui/material/List';
import { ListItemText } from '@mui/material';

const styles = (theme: any) => ({
  container: {
    marginTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleAccordian: {
    margin: 2,
    padding: 15
  },
  title: {
    paddingBottom: theme.spacing(2),
  },
  smallerText: {
    color: 'grey', 
  },
  printButton: {
    borderRadius: 7, 
    margin: 30,
  },
  accordionDetails: {
    display: 'block',
    justifyContent: 'center',
  },
  accordionText: {
    padding: 20,
    display: 'block',
  },
  paragraph: {
    marginTop: 10
  },
  accordionDetailsButton: {
    display: 'flex', 
    marginTop: '20px', 
    width: '100%', 
    justifyContent: 'center', 
    alignContent: 'center', 
  },
  header: {
    fontSize: '18px',
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

        <Paper>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <div className={classes.titleAccordian}>
              <Typography className={classes.title} variant="h5">{props.translation.userManual.tests}</Typography>
              <Typography className={classes.smallerText}>{props.translation.userManual.testsSubHeader}</Typography>
            </div>
            </AccordionSummary>
            <Divider />
            <AccordionDetails className={classes.accordionDetails} >
            <div className={classes.accordionText} ref={componentRefTests}>
                <Typography>{props.translation.userManual.testText}</Typography>
                <List sx={{paddingLeft: 5}}>
                    <ListItemText className={classes.smallerText}>{props.translation.userManual.testPoint1}</ListItemText>
                    <ListItemText className={classes.smallerText}>{props.translation.userManual.testPoint2}</ListItemText>
                    <ListItemText className={classes.smallerText}>{props.translation.userManual.testPoint3}</ListItemText>
                </List>

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
                </div>

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
                    documentTitle={props.translation.userManual.testsDocumentTitle}
                    pageStyle="print"
                    />
                </div>
            </AccordionDetails>
          </Accordion >
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
            <div className={classes.titleAccordian}>
              <Typography className={classes.title} variant="h5">{props.translation.userManual.students}</Typography>
              <Typography className={classes.smallerText}>{props.translation.userManual.studentsSubHeader}</Typography>
            </div>
            </AccordionSummary>
            <Divider />
            <AccordionDetails  className={classes.accordionDetails} >
            <div className={classes.accordionText} ref={componentRefStudents}>
              <Typography className={classes.paragraph}>{props.translation.userManual.studentsIntro}</Typography>
              <Typography className={classes.paragraph}>{props.translation.userManual.studentsSecond}</Typography>
              <Typography className={classes.paragraph}>{props.translation.userManual.studentsThird}</Typography>
              <Typography className={classes.paragraph}>{props.translation.userManual.studentsFourth}</Typography>
              <Typography className={classes.paragraph}>{props.translation.userManual.studentsFifth}</Typography>
            </div>
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
                    documentTitle={props.translation.userManual.studentsDocumentTitle}
                    pageStyle="print"
                    />
                </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
            <div className={classes.titleAccordian}>
              <Typography className={classes.title} variant="h5">{props.translation.userManual.classOverview}</Typography>
              <Typography className={classes.smallerText}>{props.translation.userManual.classesSubHeader}</Typography>
            </div>
            </AccordionSummary>
            <Divider />
            <AccordionDetails className={classes.accordionDetails}>
                <div className={classes.accordionText} ref={componentRefClasses}>
                    <Typography>
                        {props.store.userStore.role == "ADMIN" ? 
                    props.translation.userManual.classesDescriptionAdmin : props.translation.userManual.classesDescriptionTeacher}
                    </Typography>
                </div>
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
                    documentTitle={props.translation.userManual.classesDocumentTitle}
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