import React from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Container, Paper, Typography, IconButton, Button } from '@material-ui/core';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

const styles = (theme: any) => ({
  container: {
    marginTop: theme.spacing(10),
    justifyContent: 'center',
    alignItems: 'center',
  },

  fixedPaper: {
      width: '40vw',
      minWidth: '400px'
  },
  smallerText: {
    fontSize: '12px',
    color: 'grey', 
  },
  titleAccordian: {
    margin: 2
  },
  printButton: {
    backgroundColor: '#2A646D',
    borderRadius: 7, 
    margin: 30,
    color: 'white',
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

    return (
                
     <Container maxWidth="xl" className={classes.container}>

        <Paper>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <div className={classes.titleAccordian}>
              <Typography>Tester</Typography>
              <Typography className={classes.smallerText}>Hvordan gjennomføre screeningtestene med din elev</Typography>
            </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
            <div className={classes.titleAccordian}>
              <Typography>Dine elever</Typography>
              <Typography className={classes.smallerText}>Hvordan bruke elevoversikten</Typography>
            </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
            <div className={classes.titleAccordian}>
              <Typography>Dine klasser</Typography>
              <Typography className={classes.smallerText}>Hvordan bruke klasseoversikten</Typography>
            </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          </Paper>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button aria-label="print" 
                disableElevation
                variant={"contained"}
                color={'primary'} 
                className={classes.printButton}>
                <LocalPrintshopIcon />
                <Typography variant="caption">&nbsp; Skriv ut brukermanualen</Typography>
            </Button>
            </div>

        </Container>

  );
});

export default withStyles(styles)(UserManual);