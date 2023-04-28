import { observer } from 'mobx-react';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ChartCard from '../ChartCard';

// interface StudentResultPageProps {
//   initialCount: number;
// }

// const StudentResultPage: React.FC<StudentResultPageProps> = observer(props: any) => {
const StudentResultPage = observer((props: any) => {


    return (
        <div>

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


        </div>
    );
});

export default StudentResultPage;