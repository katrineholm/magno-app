import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, Grid, SvgIconTypeMap } from '@material-ui/core/'; 
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import {
  useNavigate,
} from "react-router-dom";
import { Divider } from '@material-ui/core';

const styles = (theme: any) => ({
    header: {
      paddingLeft: theme.spacing(2),
      height: '14vh',
      maxHeight: "150px"

    },
    icon: {
      paddingLeft: '3vh',
      marginTop: theme.spacing(2),
      height: '11vh'
    },
    buttonDetail: {
      paddingLeft: theme.spacing(2),
      marginTop: theme.spacing(1),
      padding: theme.spacing(0),
    },
    fixedHeight: {
      maxWidth: "450px",
      minWidth: "370px",
      maxHeight: "210px",
      minHeight: "180px",
      height: "19vh",
      width: "25vw",
      
    },
    cardContent:{
      padding: theme.spacing(0),
    }
  });

interface ActionNavigationCardProps {
  header: string;
  text: string;
  icon: any;
  buttonText: string;
  toolbarSelection: number;
  store: any;
  route: string;
  classes: any;
}

  
const ActionNavigationCard = observer( (props: ActionNavigationCardProps) => {
  const {classes} = props;
  const navigate = useNavigate();

  function handleNavigation(){
    props.store.viewStore.setToolbarSelected(props.toolbarSelection)
    navigate(props.route)
  }


  return (
    <Card variant="outlined" className={classes.fixedHeight}>
        <CardActionArea onClick={() => handleNavigation()} className={classes.fixedHeight}>
            <CardContent className={classes.cardContent}>
                <Grid direction="row" container spacing={0}>
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
                <Divider style={{marginTop: 8}}/>
                <Grid direction="row" container spacing={0}>
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

export default withStyles(styles)(ActionNavigationCard);