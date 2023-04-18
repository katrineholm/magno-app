import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { addStudent } from './Communicator'
//import { v4 as uuidv4 } from 'uuid';

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

interface StudentFormDialogProps {
    store: any;
    open: boolean;
    setOpen: (open: boolean) => void;
    classes: any;
    translation: any;
    fetchStudents: () => void;
}

function StudentFormDialog(props: StudentFormDialogProps) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [className, setClassName] = useState<string | unknown>('');
    const { classes } = props;


    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value)
    }

    function handleGradeChange(event: React.ChangeEvent<{ value: string | unknown }>) {
        setClassName(event.target.value)
    }


    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        const data = await addStudent(
            firstName + " " + lastName,
            String(className),
            props.store.userStore.school
        )
        if (data !== undefined) {
            if (data.result.includes("Success")) {
                props.fetchStudents();
                props.store.viewStore.setSnackBar(firstName + " " + lastName + props.translation.studentFormDialog.successMessage, 'success');
                props.store.viewStore.setOpenSnackBar(true);
                props.setOpen(false)
            }
            else {
                props.store.viewStore.setSnackBar(props.translation.studentFormDialog.errorMessage, 'error');
                props.store.viewStore.setOpenSnackBar(true);
                props.setOpen(false)
            }
        }

        setFirstName("");
        setLastName("");
        setClassName("");
    }

    return (

        <Dialog
            fullWidth={true}
            maxWidth={"sm"}
            open={props.open}
            scroll={'body'}
            onClose={() => props.setOpen(false)}
        >
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
                    <FormControl required style={{ minWidth: 80 }}>
                        <InputLabel id="select-grade">{props.translation.studentFormDialog.labelGrade}</InputLabel>
                        <Select
                            labelId="grade"
                            id="grade"
                            required
                            value={className}
                            label={props.translation.studentFormDialog.labelGrade}
                            onChange={handleGradeChange}
                        >
                            {props.store.classStore.classList
                                .map((grade: any, index: number) => {
                                    return (
                                        <MenuItem key={index} value={grade.name}>{grade.name}</MenuItem>
                                    )
                                }
                                )}
                        </Select>
                    </FormControl>
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

        </Dialog>

    );
}

export default withStyles(styles)(StudentFormDialog);