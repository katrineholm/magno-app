import React, { MutableRefObject, useRef } from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Container, Paper, Typography, IconButton, Button, Divider } from '@material-ui/core';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ReactToPrint from 'react-to-print';
import List from '@mui/material/List';
import { ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
    //fontWeight: 'bold', 
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const UserManual = observer( (props: any) => {
  const {classes} = props;
  const componentRef = useRef(null);
  const [value, setValue] = React.useState(0);


const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
};
  
const handlePrintPdf = () => {
  const link = document.createElement('a');
  link.href = process.env.PUBLIC_URL + '/magno-brukermanual.pdf'; // Replace with the actual path to your PDF file
  link.target = '_blank';
  link.download = 'magno-brukermanual.pdf'; // Replace with the desired name for the downloaded file
  link.click();
};

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
            <div className={classes.accordionText} ref={componentRef}>
                <Typography>{props.translation.userManual.testText}</Typography>
                <List sx={{paddingLeft: 5}}>
                    <ListItemText className={classes.smallerText}>{props.translation.userManual.testPoint1}</ListItemText>
                    <ListItemText className={classes.smallerText}>{props.translation.userManual.testPoint2}</ListItemText>
                    <ListItemText className={classes.smallerText}>{props.translation.userManual.testPoint3}</ListItemText>
                </List>
                <Box sx={{ width: '100%', bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider',  
                '& .MuiTabs-indicator': {
                    backgroundColor: '#2A646D', 
                  }, 
                  '& .MuiTab-root': {
                    color: '#2A646D',
                  },}}>
                  <Tabs value={value} onChange={handleChange}  textColor='inherit' indicatorColor='primary' >
                    <Tab label={props.translation.userManual.motionTest}  {...a11yProps(0)} />
                    <Tab label={props.translation.userManual.formFixedTest}  {...a11yProps(1)} />
                    <Tab label={props.translation.userManual.formRandomTest}  {...a11yProps(2)} />
                  </Tabs>
                </Box>
                    <TabPanel value={value} index={0}>
                    <Typography>{props.translation.userManual.motionSummary}</Typography>
                      <Typography>{props.translation.userManual.motionDescription}</Typography>

                      <Typography>{props.translation.userManual.motionPointsIntro}</Typography>
                      <List sx={{ listStyleType: 'disc' , paddingLeft: 5}}>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.motionPoint1}</ListItemText>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.motionPoint2}</ListItemText>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.motionPoint3}</ListItemText>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.motionPoint4}</ListItemText>
                      </List>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  <Typography>{props.translation.userManual.formFixedDescription}</Typography>
                      <Typography>{props.translation.userManual.formPointsIntro}</Typography>
                      <List sx={{ listStyleType: 'disc' , paddingLeft: 5}}>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formPoint1}</ListItemText>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formPoint2}</ListItemText>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formPoint3}</ListItemText>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formPoint4}</ListItemText>
                      </List>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Typography>{props.translation.userManual.formRandomDescription}</Typography>
                    <Typography>{props.translation.userManual.formPointsIntro}</Typography>
                      <List sx={{ listStyleType: 'disc' , paddingLeft: 5}}>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formPoint1}</ListItemText>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formPoint2}</ListItemText>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formPoint3}</ListItemText>
                          <ListItemText sx={{ display: 'list-item' }}>{props.translation.userManual.formPoint4}</ListItemText>
                      </List>
                  </TabPanel>
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
            <div className={classes.accordionText}>
              <Typography className={classes.paragraph}>{props.translation.userManual.studentsIntro}</Typography>
              <Typography className={classes.paragraph}>{props.translation.userManual.studentsSecond}</Typography>
              <Typography className={classes.paragraph}>{props.translation.userManual.studentsThird}</Typography>
              <Typography className={classes.paragraph}>{props.translation.userManual.studentsFourth}</Typography>
              <Typography className={classes.paragraph}>{props.translation.userManual.studentsFifth}</Typography>
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
                <div className={classes.accordionText}>
                    <Typography>
                        {props.store.userStore.role == props.translation.admin ? 
                    props.translation.userManual.classesDescriptionAdmin : props.translation.userManual.classesDescriptionTeacher}
                    </Typography>
                </div>
            </AccordionDetails>
          </Accordion>
          </Paper>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button aria-label="print" 
                        disableElevation
                        variant={"contained"}
                        color={'primary'} 
                        className={classes.printButton}
                        onClick={handlePrintPdf}>
              <LocalPrintshopIcon />
              <Typography variant="caption">&nbsp; {props.translation.userManual.printButton}</Typography>
            </Button>
          </div>
        </Container>
  );
});

export default withStyles(styles)(UserManual);