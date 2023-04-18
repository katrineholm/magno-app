import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useCookies } from 'react-cookie';
import MagnoLogo from '../../files/magno-logo.png';
import { loginAccount, getCurrentUser } from '../Communicator'
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
  container: {
    marginTop: theme.spacing(10),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  img: {
    width: "100%",
    maxWidth: "550px",
    marginBottom: theme.spacing(2),
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }
});

export type SnackBarVariants = 'error' | 'success'

const Login = observer((props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['c_user']);
  const navigate = useNavigate();
  const { classes } = props;

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    //const data = await loginAccount(email, password)
    const data = await loginAccount(email, password)
    const user = await getCurrentUser()
    props.store.userStore.setUserEmail(user.email);
    props.store.userStore.setSchool(user.school);
    props.store.userStore.setRole(user.role);
    props.store.userStore.setLoginStatus(true);

    navigate('/home')


  }

  return (
    <div>
      <div className={classes.appBarSpacer} />
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <img src={MagnoLogo} className={classes.img} alt="Magno logo"></img>
          <Typography component="h1" variant="h5">
            {props.translation.login.title}
          </Typography>
          <form name="SignInForm" onSubmit={handleSubmit} className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={props.translation.login.labelEmail}
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
              value={email} />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={props.translation.login.labelPassword}
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
              value={password} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              {props.translation.login.labelSubmit}
            </Button>
            <Grid container>
              <Grid item>
                <Link to={'/register'}>
                  {props.translation.login.link}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
})

export default withStyles(styles)(Login);