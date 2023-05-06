import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea, CardHeader, Grid, CardMedia } from '@material-ui/core/'; 
import {observer} from 'mobx-react';
import { Divider } from '@material-ui/core';
import {Tooltip, Typography} from '@material-ui/core'
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";

const styles = (theme: any) => ({
  cardMedia: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  cardButton: {
    height: '3vh',
  },
  fixedHeight: {
    maxWidth: '550px',
    minHeight: '400px',
    
  },
  cardContent:{
    padding: theme.spacing(0),
  },
});

const tooltipTheme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        color: 'rgba(0, 0, 0, 0.87)',
        backgroundColor: '#acbabf',
      }
    }
  }
});

interface ActionTestCardProps {
  header: string;
  link: string;
  text: string;
  tooltip: string;
  img: string;
  buttonText: string;
  handleTestClick: (test: string, link: string) => void;
  classes: any;
}

const ActionTestCard = observer( (props: ActionTestCardProps) => {
  const {classes} = props;

  return (
    <MuiThemeProvider theme={tooltipTheme}>
      <Tooltip arrow title={
        <div>
        <Typography color="inherit" variant="subtitle1">{props.header}</Typography>
        <Typography color="inherit" variant="body2">{props.tooltip}</Typography>
        </div>
      }>
        <Card variant="outlined" className={classes.fixedHeight}>
            <CardActionArea onClick={() => props.handleTestClick(props.header, props.link)} className={classes.fixedHeight}>
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
                    <Grid 
                        direction="row"
                        container 
                        alignItems="center"
                        justifyContent="center"
                        spacing={0}
                    >
                    <Grid item xs={12} md={12} lg={12} xl={12} className={classes.cardButton}>
                    <Divider/>
                            <Typography style={{ textAlign: 'center', margin: 'auto'}} variant="button" color="primary" component="div">
                                {props.buttonText}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
      </Tooltip>
    </MuiThemeProvider>
  );
});

export default withStyles(styles)(ActionTestCard);