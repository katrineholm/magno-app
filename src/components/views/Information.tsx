import React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Paper, Typography } from '@material-ui/core';

const styles = (theme: any) => ({
    container: {
        marginTop: theme.spacing(10),
        justifyContent: 'center',
        alignItems: 'center',
    },

    fixedPaper: {
        width: '60vw',
        minWidth: '400px'
    }

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
                        <Typography variant="h4" style={{ textAlign: 'center' }}>{props.translation.information.title}</Typography>
                        <Typography variant="body1" style={{ textAlign: 'center' }}>
                            {props.translation.information.subheader}
                        </Typography>
                        <br />
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
                            {props.translation.information.introduction}
                        </Typography>
                        <br />
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20, fontSize: 18 }} variant="subtitle2">
                            {props.translation.information.testTitle}
                        </Typography>
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
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
                        <br />
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20, fontSize: 18 }} variant="subtitle2">
                            {props.translation.information.applicationTitle}
                        </Typography>
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
                            {props.translation.information.applicationText}
                        </Typography>
                        <br />
                        <Typography variant="h4" style={{ textAlign: 'center' }}>{props.translation.information.researchTitle}</Typography>
                        <br />
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20, fontSize: 18 }} variant="subtitle2">
                            {props.translation.information.researchTestTitle}
                        </Typography>
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
                            {props.translation.information.researchTestText}
                        </Typography>
                        <br />
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20, fontSize: 18 }} variant="subtitle2">
                            {props.translation.information.magnoTheoryTitle}
                        </Typography>
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
                            {props.translation.information.magnoTheoryText1}
                        </Typography>
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
                            {props.translation.information.magnoTheoryText2}
                        </Typography>
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
                            {props.translation.information.magnoTheoryText3}
                        </Typography>
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
                            {props.translation.information.magnoTheoryText4}
                        </Typography>
                        <br />
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20, fontSize: 18 }} variant="subtitle2">
                            {props.translation.information.effectTitle}
                        </Typography>
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
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
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
                            {props.translation.information.effectText2}
                        </Typography>
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
                            {props.translation.information.effectText3}
                        </Typography>
                        <br />
                        {/* <Typography variant="h4" style={{ textAlign: 'center' }}>
                            {props.translation.information.bibliografyTitle}
                        </Typography>
                        <br />
                        <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="body1">
                            [1] - Egset, K. et al. (2020). Magno App: Exploring Visual Processing in Adults with High and Low Reading Competence, Scandinavian Journal of Educational Research
                            <br />
                            [2] - Høien, T., & Tønnesen, G. (1997). Håndbok til ordkjedetesten. Stavanger: Stiftelsen Dysleksiforsking.
                            <br />
                            [3] - Ramus, F. et al. (2003). ‘Theories of developmental dyslexia: insights from a multiple case study of dyslexic adults’. Brain 126, side 841–865
                            <br />
                            [4] - Heim, S. et al. (2008). ‘Cognitive subtypes of dyslexia’. Acta Neurobiol Exp 68, side 73–82
                            <br />
                            [5] - Stein, J. (2018). ‘What is developmental Dyslexia?’. Side 1–13
                            <br />
                            [6] - Lawton, T. (2011). ‘Improving Magnocellular Function in the Dorsal Stream Deficits’. Side 142–154.
                            <br />
                            [7] - Livingstone, M.S. et al. (1991). ‘Physiological and anatomical evidence for a magno-cellular defect in developmental dyslexia’. Side 7943–7947
                            <br />
                            [8] - Stein, J. (2001). ‘The Magnocellular Theory of Developmental Dyslexia’. Side 12–36.
                            <br />
                            [9] - Sousa, D.A (2017). How the Brain Learns to Read. 5th ed. SAGE Publications.
                            <br />
                            [10] - Solem, C. (2021). Praksis for utredning av spesifikke lese- og skrivevansker, matematikkvansker og språkvansker i Norge.
                            <br />
                            [11] - Fletcher, J. M. (2009). ‘Dyslexia: The evolution of a scientific concept’. Dyslexia 7, side 1–13
                            <br />
                            [12] - Snowling, M. (1998). ‘Dyslexia as a Phonological Deficit: Evidence and Implications’.
                            Child Psychology Psychiatry Review 3, side 4–11
                            <br />
                            [13] - Foorman, B.R. et al. (1997). ‘The case for early reading intervention’.
                            Foundations of reading acquisition and dyslexia: Implications for early intervention, side 243–264.
                        </Typography> */}










                    </Paper>
                </Grid>
            </Container>
        </div>
    );
});

export default withStyles(styles)(Information);