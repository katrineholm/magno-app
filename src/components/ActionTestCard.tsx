import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, CardHeader, Grid } from '@material-ui/core/'; 
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import {
  useNavigate,
} from "react-router-dom";
import { Divider } from '@material-ui/core';

const styles = (theme: any) => ({
    header: {
      paddingLeft: theme.spacing(2),
      height: '130px',
    },
    icon: {
      paddingLeft: theme.spacing(3),
      marginTop: theme.spacing(2),
      height: '90px'
    },
    buttonDetail: {
      paddingLeft: theme.spacing(2),
      marginTop: theme.spacing(1),
      padding: theme.spacing(0),
    },
    card:{
      height: 180,
      width: 400,
      border: "2px",
    },
    fixedHeight: {
      height: 180,
      width: 400,
    },
    cardContent:{
      padding: theme.spacing(0),
    }
  });

const ActionTestCard = observer( (props: any) => {
    const {classes} = props;
    const navigate = useNavigate();
    return (
        <Card variant="outlined" className={classes.fixedHeight}>
        <CardActionArea onClick={() => navigate(props.route)} className={classes.fixedHeight}>
            <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
            />
            <CardContent className={classes.cardContent}>
            <Grid direction="row"
                  container 
                  spacing={0}
                  >
                    <Grid item xs={8} md={8} lg={8} xl={8} className={classes.header}>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.header}
                        </Typography>
                        <Typography color="inherit" variant="body2">
                            {props.text}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} md={4} lg={4} xl={4} className={classes.icon}>
                        {props.icon}
                    </Grid>
                  </Grid>
            <Divider/>
            <Grid direction="row"
                  container 
                  spacing={0}
                  >
            <Grid item xs={12} md={12} lg={12} xl={12} className={classes.buttonDetail}>
                        <Typography variant="button" color="primary" component="div">
                            {props.buttonText}
                        </Typography>
                    </Grid>
            </Grid>
            </CardContent>
        </CardActionArea>
        </Card>
    );
});

export default withStyles(styles)(ActionTestCard);