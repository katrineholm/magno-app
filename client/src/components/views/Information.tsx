import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Container, Paper, Typography, IconButton, Button, Divider } from '@material-ui/core';

const styles = (theme: any) => ({
    container: {
        marginTop: theme.spacing(10),
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: theme.spacing(10),
    },
    fixedPaper: {
        width: '60vw',
        minWidth: '400px'
    },
    accordionDetails: {
        display: 'block',
        justifyContent: 'center',
    },
    accordionText: {
        padding: 20,
        display: 'block',
    },
    titleAccordian: {
        margin: 2,
        padding: 15
    },
    title: {
        paddingBottom: theme.spacing(2),
    },


});

/**
 *
 *
 * @export
 * @returns
 */
const Information = observer((props: any) => {
    const { classes } = props;

    return (
        <div>

            <Container maxWidth="xl" className={classes.container}>
                <Grid direction="row"
                    alignItems="center"
                    justifyContent="center"
                    container
                    spacing={6}
                >
                    <Paper className={classes.fixedPaper}>
                        <div className={classes.accordionText}>
                            <Typography variant="h4" style={{ textAlign: 'center' }}>{props.translation.information.title}</Typography>
                            <Typography variant="body1" style={{ textAlign: 'center' }}>
                                {props.translation.information.subheader}
                            </Typography>
                            <br />
                            <br />
                            <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
                                {props.translation.information.introduction}
                            </Typography>
                            <br />
                        </div>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className={classes.titleAccordian}>
                                    <Typography className={classes.title} variant="h5">{props.translation.information.testTitle}</Typography>
                                </div>
                            </AccordionSummary>
                            <Divider />
                            <AccordionDetails className={classes.accordionDetails} >
                                <div className={classes.accordionText}>
                                    <Typography>
                                        {props.translation.information.testText}
                                    </Typography>
                                    <br />
                                    <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="subtitle2">
                                        {props.translation.information.firstPoint}
                                    </Typography>
                                    <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="subtitle2">
                                        {props.translation.information.secondPoint}
                                    </Typography>
                                    <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="subtitle2">
                                        {props.translation.information.thirdPoint}
                                    </Typography>

                                </div>
                            </AccordionDetails>
                        </Accordion >
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className={classes.titleAccordian}>
                                    <Typography className={classes.title} variant="h5">{props.translation.information.applicationTitle}</Typography>
                                </div>
                            </AccordionSummary>
                            <Divider />
                            <AccordionDetails className={classes.accordionDetails} >
                                <div className={classes.accordionText}>
                                    <Typography>
                                        {props.translation.information.applicationText}
                                    </Typography>
                                </div>
                            </AccordionDetails>
                        </Accordion >
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className={classes.titleAccordian}>
                                    <Typography className={classes.title} variant="h5">{props.translation.information.researchTitle}</Typography>
                                </div>
                            </AccordionSummary>
                            <Divider />
                            <AccordionDetails className={classes.accordionDetails} >
                                <div className={classes.accordionText}>
                                    <Typography style={{ paddingBottom: 8, fontSize: 18 }} variant="subtitle2">
                                        {props.translation.information.researchTestTitle}
                                    </Typography>
                                    <Typography>
                                        {props.translation.information.researchTestText}
                                    </Typography>
                                    <br />
                                    <Typography style={{ paddingBottom: 8, fontSize: 18 }} variant="subtitle2">
                                        {props.translation.information.magnoTheoryTitle}
                                    </Typography>
                                    <Typography>
                                        {props.translation.information.magnoTheoryText1}
                                    </Typography>
                                    <Typography>
                                        {props.translation.information.magnoTheoryText2}
                                    </Typography>
                                    <Typography>
                                        {props.translation.information.magnoTheoryText3}
                                    </Typography>
                                    <Typography>
                                        {props.translation.information.magnoTheoryText4}
                                    </Typography>
                                    <br />
                                    <Typography style={{ paddingBottom: 8, fontSize: 18 }} variant="subtitle2">
                                        {props.translation.information.effectTitle}
                                    </Typography>
                                    <Typography>
                                        {props.translation.information.effectText1}
                                    </Typography>
                                    <br />
                                    <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="subtitle2">
                                        {props.translation.information.effectPoint1}
                                    </Typography>
                                    <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="subtitle2">
                                        {props.translation.information.effectPoint2}
                                    </Typography>
                                    <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="subtitle2">
                                        {props.translation.information.effectPoint3}
                                    </Typography>
                                    <br />
                                    <Typography>
                                        {props.translation.information.effectText2}
                                    </Typography>
                                    <br />
                                    <Typography>
                                        {props.translation.information.effectText3}
                                    </Typography>
                                    <br />
                                    <Typography variant="h4" style={{ textAlign: 'center' }}>
                                        {props.translation.information.bibliografyTitle}
                                    </Typography>
                                    <br />
                                    <Typography>
                                        Egset, K. et al. (2020). Magno App: Exploring Visual Processing in Adults with High and Low Reading Competence, Scandinavian Journal of Educational Research
                                        <br />
                                        Ramus, F. et al. (2003). ‘Theories of developmental dyslexia: insights from a multiple case study of dyslexic adults’. Brain 126, side 841–865
                                        <br />
                                        Sousa, D.A (2017). How the Brain Learns to Read. 5th ed. SAGE Publications.
                                        <br />
                                        Solem, C. (2021). Praksis for utredning av spesifikke lese- og skrivevansker, matematikkvansker og språkvansker i Norge.
                                        <br />
                                        Fletcher, J. M. (2009). ‘Dyslexia: The evolution of a scientific concept’. Dyslexia 7, side 1–13
                                        <br />
                                        Foorman, B.R. et al. (1997). ‘The case for early reading intervention’. Foundations of reading acquisition and dyslexia: Implications for early intervention, side 243–264.
                                    </Typography>
                                </div>
                            </AccordionDetails>
                        </Accordion >
                    </Paper>
                </Grid>
            </Container>
        </div >
    );
});

export default withStyles(styles)(Information);