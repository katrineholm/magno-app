import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, CardHeader, Grid, CardMedia } from '@material-ui/core/'; 
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import {
  useNavigate,
} from "react-router-dom";
import { Divider } from '@material-ui/core';

const styles = (theme: any) => ({
  cardContent:{
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  },
});

interface RiskCardProps {
  risk: string;
  icon: any;
  text: string;
  classes: any;
}

const RiskCard = observer( (props: RiskCardProps) => {
  const {classes} = props;

  return (
    <Card variant="outlined">
        <CardContent className={classes.cardContent}>
            <Typography 
                style={{ 
                    textAlign: 'center', 
                    margin: 'auto'
                }} 
                variant="subtitle1" 
                color="textSecondary" 
                component="div">
                Risiko
            </Typography>
            <Typography 
                style={{ 
                    textAlign: 'center', 
                    margin: 'auto'
                }} 
                variant="h4" 
                color="inherit" 
                component="div">
                {props.risk}
            </Typography>
            <Typography 
                style={{
                        textAlign: 'center', 
                        margin: 'auto', 
                        paddingTop: 20, 
                        paddingBottom: 20
                    }} 
                    variant="body1" 
                    color="inherit" 
                    component="div">
                {props.text}
            </Typography>
                <Grid 
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    container 
                    spacing={0}
                    >
                    <Grid item xs={4} md={4} lg={4} xl={4} className={classes.icon}>
                        {props.icon}
                    </Grid>
                </Grid>
        </CardContent>
    </Card>
  );
});

export default withStyles(styles)(RiskCard);