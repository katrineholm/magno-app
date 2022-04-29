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
  cardMedia: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  cardButton: {
    height: '3vh'
  },
  fixedHeight: {
    maxWidth: '550px',
    width: "25vw",
  },
  cardContent:{
    padding: theme.spacing(0),
  },
});

interface ActionTestCardProps {
  header: string;
  text: string;
  img: string;
  buttonText: string;
  handleTestClick: (test: string) => void;
  classes: any;
}

const ActionTestCard = observer( (props: ActionTestCardProps) => {
  const {classes} = props;

  return (
    <Card variant="outlined" className={classes.fixedHeight}>
        <CardActionArea onClick={() => props.handleTestClick(props.header)} className={classes.fixedHeight}>
            <CardHeader
                title={props.header}
                subheader={props.text}
                style={{ textAlign: 'center', padding: 8}}
            />
            <CardContent className={classes.cardContent}>
                <Grid 
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    container 
                    spacing={0}
                >
                    <Grid item xs={12} md={12} lg={12} xl={12} className={classes.cardMedia}>
                        <CardMedia
                        component="img"
                        height="100%"
                        image={props.img}
                        alt="image"
                        />
                    </Grid>
                </Grid>
                <Divider/>
                <Grid 
                    direction="row"
                    container 
                    alignItems="center"
                    justifyContent="center"
                    className={classes.cardButton}
                    spacing={0}
                >
                <Grid item xs={12} md={12} lg={12} xl={12}>
                        <Typography style={{ textAlign: 'center', margin: 'auto'}} variant="button" color="primary" component="div">
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