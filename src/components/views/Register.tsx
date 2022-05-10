import React, { useState } from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { v4 as uuidv4 } from 'uuid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MagnoLogo from '../../files/magno-logo.png';
import { createAccount } from '../Communicator';

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
  container: {
    marginTop: theme.spacing(10),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  img: {
    width: "100%",
    maxWidth: "450px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }
});
export type SnackBarVariants = 'error' | 'success'

//class Register extends Component
const Register = observer( (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [school, setSchool] = useState<string | null>("");
    const [value, setValue] = useState('');
    const schools = ["Huseby Barneskole", "Åsheim Barneskole", "Charlottenlund Barneskole"];
    const navigate = useNavigate();


    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }


    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        if (password.length < 8){
            props.store.viewStore.setSnackBar('Password is too short, needs to be at least 8 letters long', 'error');
            props.store.viewStore.setOpenSnackBar(true);
        }
        else{

            const result = await createAccount(uuidv4(), email.toLowerCase(), password, String(school))
            if (result.includes("exists")){
                props.store.viewStore.setSnackBar(result, 'error');
                props.store.viewStore.setOpenSnackBar(true);
            }
            else if (result.includes("Success")){
                props.store.viewStore.setSnackBar(result, 'success');
                props.store.viewStore.setOpenSnackBar(true);
                navigate('/login')
            }
        }
    }

    const {classes} = props;
            
    return (
        <div>
            <Container component="main" maxWidth="xs" className={classes.container}>
            <CssBaseline />
                <div className={classes.paper}>
                    <img src={MagnoLogo} className={classes.img}alt="Magno logo"></img>
                    <Typography component="h1" variant="h5">
                        Opprett en konto for Magno
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
                        <Grid item xs={12}>
                        <Autocomplete
                            ListboxProps={{ style: { maxHeight: 150, overflow: 'auto' } }}
                            disablePortal
                            id="search-box"
                            options={schools}
                            value={school}
                            onChange={(event: any, newValue: string | null) => {
                                setSchool(newValue);
                            }}
                            inputValue={value}
                            onInputChange={(event, newInputValue) => {
                                setValue(newInputValue);
                            }}
                            renderInput={(params) => <TextField required variant={"outlined"} {...params} label={"Velg skole"} />}
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
                </div>
            </Container>
        </div>
        );
    }
);
  
export default withStyles(styles)(Register);