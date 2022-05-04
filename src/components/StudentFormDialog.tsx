import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/core/styles';
import SearchBox from './SearchBox';
import { useState } from 'react';

const styles = (theme: any) => ({
  dialogBox: {
    textAlign: 'center' as "center",
    justifyContent: 'center',
    alignItems: 'center',
    height: '35vh',
    width: "90%",
    margin: "auto",
  },
  button: {
    width: "85%",
    margin: "auto"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

interface StudentFormDialogProps {
  store: any;
  open: boolean;
  setOpen: (open: boolean) => void;
  classes: any;
}

function StudentFormDialog(props: StudentFormDialogProps) {
  const [value, setValue] = useState<string | null>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const {classes} = props;

    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value)
    }

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        //const data = await loginAccount(email, password)
        props.store.viewStore.setSnackBar(firstName + " " + lastName + " ble lagt til", 'success');
        props.store.viewStore.setOpenSnackBar(true);
        props.setOpen(false)
        setFirstName("");
        setLastName("")
        /*if (data.result.includes("Wrong user")){
            props.store.viewStore.setMessage(data.result);
            handleSnackBar(true);
        }
        else{
            const expiryDate = new Date(Date.now() + 1000*60*60*3600);
            setCookie('c_user', data.token, { expires: expiryDate });
            props.store.userStore.setUserEmail(email)
            props.store.userStore.setLoginStatus(true);
            navigate('/home')
        }*/
    }
  return (
    <div >
        <Dialog 
            fullWidth={true}
            maxWidth={"sm"}
            open={props.open} 
            scroll={'body'}
            onClose={() => props.setOpen(false)} 
        >
            <DialogTitle style={{ textAlign: 'center'}}>
                Legg til en ny elev i oversikten
            </DialogTitle>
            <DialogContent className={classes.dialogBox}>
                <form name="SignInForm" onSubmit={handleSubmit} className={classes.form}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="fornavn"
                    label="fornavn"
                    name="fornavn"
                    autoComplete="fornavn"
                    autoFocus
                    onChange={handleFirstNameChange}
                    value={firstName}/>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="etternavn"
                    label="etternavn"
                    type="etternavn"
                    id="etternavn"
                    autoComplete="etternavn"
                    onChange={handleLastNameChange}
                    value={lastName}/>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                    Legg til elev
                </Button>
            </form>
            </DialogContent>
            
        </Dialog>
    </div>
  );
}

export default withStyles(styles)(StudentFormDialog);