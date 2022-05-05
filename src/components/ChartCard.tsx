import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Grid } from '@material-ui/core/'; 
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import Chart from './Chart';

const styles = (theme: any) => ({
  cardMedia: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  cardButton: {
    height: '3vh'
  },
  cardContent:{
    padding: theme.spacing(0),
  },
});

interface ChartCardProps {
  header: string;
  text: string;
  riskScores: {score: string, date: Date}[] | undefined;
  buttonText: string;
  classes: any;
}

const ChartCard = observer( (props: ChartCardProps) => {
  const {classes} = props;

  return (
    <Card variant="outlined" >
            <CardHeader
                title={props.header}
                style={{ textAlign: 'center', padding: 8}}
            />
            <CardContent className={classes.cardContent}>
            <Chart riskScores={props.riskScores}/>
                <Grid 
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    container 
                    spacing={0}
                >
                    <Grid item xs={12} md={12} lg={12} xl={12} className={classes.cardMedia}>
                      
                    </Grid>
                </Grid>
            </CardContent>
    </Card>
  );
});

export default withStyles(styles)(ChartCard);