import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useCookies } from 'react-cookie';
import Snackbar from "../SnackBar";
import MagnoLogo from '../../files/magno-logo.png';
import { authenticate, loginAccount } from '../Communicator'
import {
  Link,
  useNavigate
} from "react-router-dom";

  const styles = (theme: any) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column' as "column",
    alignItems: 'center' as "center",
  },
  appBarSpacer: theme.mixins.toolbar,
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.dark,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export type SnackBarVariants = 'error' | 'success'

const Login = observer( (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [snackBarVariant, setSnackBarVariant] = useState('error');
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [cookies, setCookie] = useCookies(['c_user']);
  const navigate = useNavigate();
  const {classes} = props;

  useEffect(() => {
    const authFunction = async () => {
      const validUser = await authenticate(cookies, setCookie);
      if (validUser){
        navigate("/home")
      }
      else{
        props.store.userStore.setLoginStatus(false)
      }
    }
    authFunction();
  }, []);

  function handleSnackBar(bool: boolean){
      setOpenSnackBar(bool);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
      setEmail(e.target.value)
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
      setPassword(e.target.value)
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const data = await loginAccount(email, password)
    setSnackBarVariant('error');
    if (data.result.includes("Wrong user")){
      setMessage(data.result);
      handleSnackBar(true);
    }
    else{
        const expiryDate = new Date(Date.now() + 1000*60*60*3600);
        setCookie('c_user', data.token, { expires: expiryDate });
        props.store.userStore.setUserEmail(email)
        props.store.userStore.setLoginStatus(true);
        navigate('/home')
      }
    }

  return (
    <div>
      <div className={classes.appBarSpacer} />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src={MagnoLogo} alt="Magno logo"></img>
        <Typography component="h1" variant="h5">
          Logg på for å fortsette til Magno
        </Typography>
        <form name="SignInForm" onSubmit={handleSubmit} className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Epost"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Passord"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            className={classes.submit}
          >
            Logg inn
          </Button>
          <Grid container>
            
            <Grid item>
            <Link to={'/register'}>
                {"Opprett konto"}
              </Link>
            </Grid>
          </Grid>
          </form>
          <Snackbar
              variant={snackBarVariant as SnackBarVariants}
              message={message}
              open={openSnackBar}
              setOpen={() => handleSnackBar(false)}
          />
          <Snackbar
              variant={props.store.viewStore.snackBarVariant}
              message={props.store.viewStore.snackBarMessage}
              open={props.store.viewStore.openSnackBar}
              setOpen={() => props.store.viewStore.setOpenSnackBar(false)}
          />
      </div>
    </Container>
    </div>
  );
})

export default withStyles(styles)(Login);