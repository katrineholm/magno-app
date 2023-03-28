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
import { roles, schools } from '../Settings';

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
    maxWidth: "550px",
    marginBottom: theme.spacing(2),
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
    const [role, setRole] = useState<string | null>("");
    const [school, setSchool] = useState<string | null>("");
    const [valueRole, setValueRole] = useState('');
    const [value, setValue] = useState('');
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
            props.store.viewStore.setSnackBar(props.translation.register.passwordErrorMessage, 'error');
            props.store.viewStore.setOpenSnackBar(true);
        }
        else if (!roles.includes(String(role))){
            props.store.viewStore.setSnackBar(props.translation.register.roleErrorMessage, 'error');
            props.store.viewStore.setOpenSnackBar(true);
        }
        else if (!schools.includes(String(school))){
            props.store.viewStore.setSnackBar(props.translation.register.schoolErrorMessage, 'error');
            props.store.viewStore.setOpenSnackBar(true);
        }
        else if (!email.includes('@') || !email.includes('.')){
            props.store.viewStore.setSnackBar(props.translation.register.emailErrorMessage, 'error');
            props.store.viewStore.setOpenSnackBar(true);
        }
        else{
            const result = await createAccount(uuidv4(), email.toLowerCase(), password, String(role), String(school))
            if (result.includes("exists")){
                props.store.viewStore.setSnackBar(props.translation.register.errorMessage, 'error');
                props.store.viewStore.setOpenSnackBar(true);
            }
            else if (result.includes("Success")){
                props.store.viewStore.setSnackBar(props.translation.register.successMessage, 'success');
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
                        {props.translation.register.title}
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
                                label={props.translation.register.labelEmail}
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
                                label={props.translation.register.labelPassword}
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
                            id="role-search-box"
                            options={roles}
                            value={role}
                            onChange={(event: any, newRole: string | null) => {
                                setRole(newRole);
                            }}
                            inputValue={valueRole}
                            onInputChange={(event, newInputValueRole) => {
                                setValueRole(newInputValueRole);
                            }}
                            renderInput={(params) => <TextField required variant={"outlined"} {...params} label={props.translation.register.labelRole} />}
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
                            renderInput={(params) => <TextField required variant={"outlined"} {...params} label={props.translation.register.labelSchool} />}
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
                        {props.translation.register.labelSubmit}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>

                            <Link to={'/login'}>
                                {props.translation.register.link}
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