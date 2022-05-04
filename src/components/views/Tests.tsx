import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useCookies } from 'react-cookie';
import {
  useNavigate,
} from "react-router-dom";
import { authenticate } from '../Communicator';
import  ActionTestCard from '../ActionTestCard'
import MotionDots from '../../files/motiondots.jpg';
import FormFixed from '../../files/formfixed50.jpg';
import FormRandom from '../../files/formrandom50.jpg';
import TestFormDialog from '../TestFormDialog';

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
  const [cookies, setCookie] = useCookies(['c_user']);
  const [open, setOpen] = useState(false);
  const [test, setTest] = useState('Not set');
  const navigate = useNavigate();

  function openDialog(test: string){
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
            <Grid item xs={4} md={4} lg={4} xl={4}>
                <ActionTestCard 
                    header={"Motion Test"} 
                    text={"Magno bevegelsestest tester den magnocellulære kapasiteten til eleven"} 
                    img={MotionDots}
                    handleTestClick={openDialog}
                    buttonText={"Start test"}>
                </ActionTestCard>
            </Grid>
            <Grid item xs={4} md={4} lg={4} xl={4}>
                <ActionTestCard 
                    header={"Fixed Form Test"} 
                    text={"Magno fiksertformtest tester den magnocellulære kapasiteten til eleven"} 
                    img={FormFixed}
                    handleTestClick={openDialog}
                    buttonText={"Start test"}>
                </ActionTestCard>
            </Grid>
        </Grid>
        <Grid direction="row"
            alignItems="center"
            justifyContent="center" 
            container 
            spacing={6}
        >
            <Grid item xs={4} md={4} lg={4} xl={4}>
                <ActionTestCard 
                    header={"Random Form Test"} 
                    text={"Magno tilfeldigformtest tester den magnocellulære kapasiteten til eleven"} 
                    img={FormRandom}
                    handleTestClick={openDialog}
                    buttonText={"Start test"}>
                </ActionTestCard>
            </Grid>
            <Grid item xs={4} md={4} lg={4} xl={4}/>
        </Grid>
        <TestFormDialog store={props.store} test={test} open={open} setOpen={setOpen}/>
    </Container>
  );
});

export default withStyles(styles)(Tests);