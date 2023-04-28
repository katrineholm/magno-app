import React from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from '@material-ui/core';
import { title } from 'process';

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

        </Container>

  );
});

export default withStyles(styles)(UserManual);