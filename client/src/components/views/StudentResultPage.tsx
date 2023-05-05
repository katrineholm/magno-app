import { observer } from 'mobx-react';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import ChartCard from '../ChartCard';

// interface StudentResultPageProps {
//   initialCount: number;
// }

// const StudentResultPage: React.FC<StudentResultPageProps> = observer(props: any) => {

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 600,
        maxHeight: 800,
        margin: '0 auto',
        marginTop: theme.spacing(5),
        marginBottom: '20',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',

    },
    content: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(5)
    },
    button: {
        marginTop: theme.spacing(2),
        textTransform: 'none',

    },
    information: {
        marginLeft: 25,
        textAlign: "left",
    },
    spacer: {
        marginTop: theme.spacing(5),

        paddingBottom: theme.spacing(5),
    }, 
}));


const StudentResultPage = observer((props: any) => {
    const classes = useStyles();


    return (
        <div className={classes.spacer}>

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
                        riskAverages={props.store.studentStore.riskAverages}
                        translation={props.translation}
                    >
                    </ChartCard>
                </Grid>
                <Grid item xs={10} md={8} lg={4} xl={4}>
                    <ChartCard
                        header={props.translation.tests.headerFixed}
                        riskScores={props.store.studentStore.student.tests.fixed_form_test}
                        riskAverages={props.store.studentStore.riskAverages}
                        translation={props.translation}
                    >
                    </ChartCard>
                </Grid>
                <Grid item xs={10} md={8} lg={4} xl={4}>
                    <ChartCard
                        header={props.translation.tests.headerRandom}
                        riskScores={props.store.studentStore.student.tests.random_form_test}
                        riskAverages={props.store.studentStore.riskAverages}
                        translation={props.translation}
                    >
                    </ChartCard>
                </Grid>
            </Grid>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography style={{ paddingBottom: 8, marginLeft: 20, marginRight: 20 }} variant="subtitle2">
                        TODO: legg inn info om testene
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
});

export default StudentResultPage;