import React from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
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
      width: '40vw',
      minWidth: '400px'
  }
  
});

/**
 *
 *
 * @export
 * @returns
 */
const Information = observer( (props: any) => {
  const {classes} = props;

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
                    <Typography variant="h4" style={{textAlign: 'center'}}>Magno</Typography>
                    <Typography variant="body1" style={{textAlign: 'center'}}>
                    {props.translation.information.subheader}
                    </Typography>
                    <br/>
                    <Typography style={{paddingBottom: 8, marginLeft: 20, marginRight: 20}} variant="body1">
                        {props.translation.information.motionText}
                    </Typography>
                    <br/>
                    <Typography style={{paddingBottom: 8, marginLeft: 20, marginRight: 20}} variant="body1">
                        {props.translation.information.formText}
                    </Typography>
                    <br/>
                    <Typography style={{paddingBottom: 8, marginLeft: 20, marginRight: 20}} variant="subtitle2">
                        {props.translation.information.firstPoint}
                    </Typography>
                    <Typography style={{paddingBottom: 8, marginLeft: 20, marginRight: 20}} variant="subtitle2">
                        {props.translation.information.secondPoint}
                    </Typography>
                    <Typography style={{paddingBottom: 8, marginLeft: 20, marginRight: 20}} variant="subtitle2">
                        {props.translation.information.thirdPoint}
                    </Typography>
                </Paper>
            </Grid>
        </Container>
    </div>
  );
});

export default withStyles(styles)(Information);