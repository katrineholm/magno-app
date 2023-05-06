import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { addStudent } from './Communicator'

const styles = (theme: any) => ({
    dialogBox: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '35vh',
        minHeight: '315px',
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

interface StudentInClassFormDialogProps {
    store: any;
    open: boolean;
    setOpen: (open: boolean) => void;
    classes: any;
    translation: any;
    fetchStudents: () => void;
    classNameProp: string | undefined;
}

function StudentInClassFormDialog(props: StudentInClassFormDialogProps) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { classes } = props;

    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value)
    }

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        const success = await addStudent(
            firstName + " " + lastName,
            String(props.classNameProp),
            props.store.userStore.school
        )
        if (success) {
            props.fetchStudents();
            props.store.viewStore.setSnackBar(firstName + " " + lastName + props.translation.studentFormDialog.successMessage, 'success');
            props.store.viewStore.setOpenSnackBar(true);
            props.setOpen(false)
            setFirstName("");
            setLastName("");
        }
        else {
            props.store.viewStore.setSnackBar(props.translation.studentFormDialog.errorMessage, 'error');
            props.store.viewStore.setOpenSnackBar(true);
        }
    }


    return (

        <Dialog
            fullWidth={true}
            maxWidth={"sm"}
            open={props.open}
            scroll={'body'}
            onClose={() => {
                props.setOpen(false)
                setFirstName("");
                setLastName("");
            }
            }>
            <DialogTitle style={{ textAlign: 'center' }}>
                {props.translation.studentFormDialog.title}
            </DialogTitle>
            <DialogContent className={classes.dialogBox}>
                <form name="SignInForm" onSubmit={handleSubmit} className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="fornavn"
                        label={props.translation.studentFormDialog.labelFirstName}
                        name="fornavn"
                        autoComplete="fornavn"
                        autoFocus
                        onChange={handleFirstNameChange}
                        value={firstName} />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="etternavn"
                        label={props.translation.studentFormDialog.labelLastName}
                        type="etternavn"
                        id="etternavn"
                        autoComplete="etternavn"
                        onChange={handleLastNameChange}
                        value={lastName} />
                    <h4>Klasse: {props.classNameProp}</h4>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        {props.translation.studentFormDialog.buttonLabel}
                    </Button>
                </form>
            </DialogContent>

        </Dialog >

    );
}

export default withStyles(styles)(StudentInClassFormDialog);