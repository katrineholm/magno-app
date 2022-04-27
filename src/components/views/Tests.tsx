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
import FormDialog from '../FormDialog';

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

  useEffect(() => {
    const authFunction = async () => {
      const validUser = await authenticate(cookies, setCookie);
      if (!validUser){
        navigate("/login")
      }
      else{
        props.store.userStore.setLoginStatus(true)
      }
    }
    authFunction();
  }, []);

  function openDialog(test: string){
    setTest(test);
    setOpen(true);
  }

  return (
    
    <div>
        <Container maxWidth="xl" className={classes.container}>
          <Grid direction="row"
              alignItems="center"
              justifyContent="center" 
              container 
              spacing={8}
            >
            <Grid item xs={5} md={5} lg={5} xl={5}>
              <ActionTestCard 
                  header={"Motion Test"} 
                  text={"Magno bevegelsestest tester den magnocellulære kapasiteten til eleven"} 
                  img={MotionDots}
                  handleTestClick={openDialog}
                  buttonText={"Start test"}>
              </ActionTestCard>
            </Grid>
            <Grid item xs={5} md={5} lg={5} xl={5}>
              <ActionTestCard 
                  header={"Fixed Form Test"} 
                  text={"Magno fiksertformtest tester den magnocellulære kapasiteten til eleven"} 
                  img={FormFixed}
                  handleTestClick={openDialog}
                  buttonText={"Start test"}>
              </ActionTestCard>
            </Grid>
            <Grid item xs={5} md={5} lg={5} xl={5}>
              <ActionTestCard 
                  header={"Random Form Test"} 
                  text={"Magno tilfeldigformtest tester den magnocellulære kapasiteten til eleven"} 
                  img={FormRandom}
                  handleTestClick={openDialog}
                  buttonText={"Start test"}>
              </ActionTestCard>
            </Grid>
            <Grid item xs={5} md={5} lg={5} xl={5}></Grid>
          </Grid>
          <FormDialog store={props.store} test={test} open={open} setOpen={setOpen}/>
        </Container>
    </div>
  );
});

export default withStyles(styles)(Tests);