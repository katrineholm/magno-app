import React, { useState } from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js'
import Snackbar from "./SnackBar";
import MagnoLogo from '../files/magno-logo.png';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
    Link,
    useNavigate
  } from "react-router-dom";

const styles = (theme: any) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column' as "column",
    alignItems: 'center',
  },
  formControl: {
    minWidth: '100%',
  },
  appBarSpacer: theme.mixins.toolbar,
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.dark,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});
export type SnackBarVariants = 'error' | 'success'

//class Register extends Component
const Register = observer( (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [snackBarVariant, setSnackBarVariant] = useState("error");
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const navigate = useNavigate();

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
        setSnackBarVariant('error');
        if (password.length < 8){
            setMessage('Password is too short, needs to be at least 8 letters long');
            handleSnackBar(true);
        }
        else{
            const salt = CryptoJS.lib.WordArray.random(128 / 8).toString();
            const key256Bits = CryptoJS.PBKDF2(password, salt, {
                keySize: 256 / 32
            }).toString();
            const result = "Success"; //await createAccount(uuidv4(), email.toLowerCase(), key256Bits + ":" + salt)
            if (result.includes("exists")){
                setMessage(result);
                handleSnackBar(true);
            }
            else if (result.includes("Success")){
                props.model.setSnackBar(result, "success");
                setMessage(result);
                setSnackBarVariant("success");
                props.model.setOpenSnackBar(true);
                navigate('/login')
            }
        }
    }

    const {classes} = props;
            
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
            
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    autoFocus
                    id="email"
                    label="Epost adresse"
                    name="email"
                    autoComplete="email"
                    onChange={handleEmailChange}
                    value={email}
                />
                </Grid>
                <Grid item xs={12}>
                
                <TextField
                    variant="outlined"
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
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Registrer
            </Button>
            <Grid container justify="flex-end">
                <Grid item>

                <Link to={'/login'}>
                  {"Har du allerede en konto? Logg inn"}
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
            
        </div>
        </Container>
        </div>
        );
    }
);
  
export default withStyles(styles)(Register);