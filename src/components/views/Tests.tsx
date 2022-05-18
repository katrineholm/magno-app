import React, {useState} from 'react';
import {observer} from 'mobx-react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import  ActionTestCard from '../ActionTestCard'
import MotionDots from '../../files/motiondots.jpg';
import FormFixed from '../../files/formfixed50.jpg';
import FormRandom from '../../files/formrandom50.jpg';
import TestFormDialog from '../TestFormDialog';
import {
    withStyles
  } from "@material-ui/core/styles";

const styles = (theme: any) => ({
  container: {
    marginTop: theme.spacing(10),
  },
});
/**
 *
 *
 * @export
 * @returns
 */
const Tests = observer( (props: any) => {
  const {classes} = props;
  const [open, setOpen] = useState(false);
  const [test, setTest] = useState('Not set');
  const [link, setLink] = useState('Not set');

  function openDialog(test: string, link: string){
    setLink(link);
    setTest(test);
    setOpen(true);
  }

  return (
    <Container maxWidth="xl" className={classes.container}>
        <Grid direction="row"
            alignItems="center"
            justifyContent="center" 
            container 
            spacing={6}
        >
            <Grid item xs={6} md={5} lg={4} xl={4}>
                <ActionTestCard 
                    header={props.translation.tests.headerMotion} 
                    link={"motion"}
                    tooltip={props.translation.tests.tooltip}
                    text={props.translation.tests.textMotion} 
                    img={MotionDots}
                    handleTestClick={openDialog}
                    buttonText={props.translation.tests.buttonText}>
                </ActionTestCard>
            </Grid>
            <Grid item xs={6} md={5} lg={4} xl={4}>
                <ActionTestCard 
                    header={props.translation.tests.headerFixed} 
                    link={"form-fixed"}
                    tooltip={props.translation.tests.tooltip}
                    text={props.translation.tests.textFixed} 
                    img={FormFixed}
                    handleTestClick={openDialog}
                    buttonText={props.translation.tests.buttonText}>
                </ActionTestCard>
            </Grid>
        </Grid>
        <Grid direction="row"
            alignItems="center"
            justifyContent="center" 
            container 
            spacing={6}
        >
            <Grid item xs={6} md={5} lg={4} xl={4}>
                <ActionTestCard 
                    header={props.translation.tests.headerRandom} 
                    link={"form-random"}
                    tooltip={props.translation.tests.tooltip}
                    text={props.translation.tests.textRandom} 
                    img={FormRandom}
                    handleTestClick={openDialog}
                    buttonText={props.translation.tests.buttonText}>
                </ActionTestCard>
            </Grid>
            <Grid item xs={6} md={5} lg={4} xl={4}/>
        </Grid>
        <TestFormDialog store={props.store} test={test} link={link} open={open} setOpen={setOpen} translation={props.translation}/>
    </Container>
  );
});

export default withStyles(styles)(Tests);