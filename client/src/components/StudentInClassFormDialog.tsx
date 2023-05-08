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
    function sanitizeString(inputString: string): string {
        // Remove leading and trailing spaces
        let sanitizedString = inputString.trim();

        // Reduce multiple spaces to a single space
        sanitizedString = sanitizedString.replace(/\s+/g, ' ');

        return sanitizedString;
    }

    function formatUpperCase(name: string): string {
        console.log("Inne i uppercase")
        // Split the name into an array of words
        const words = name.split(' ');
        console.log("listen:", words)

        // Loop through each word and capitalize the first letter
        const formattedWords = words.map((word) => {
            const firstLetter = word[0].toUpperCase();
            const restOfWord = word.slice(1).toLowerCase();
            return `${firstLetter}${restOfWord}`;
        });

        // Join the words back into a string and return it
        return formattedWords.join(' ');
    }

    function formatFullName(first: string, last: string): string {
        //remove spaces
        const sanitizedFirstName = sanitizeString(first)
        const sanitizedLastName = sanitizeString(last)
        //Handels upper and lower cases
        const upperCaseFirstName = formatUpperCase(sanitizedFirstName)
        const upperCaseLastName = formatUpperCase(sanitizedLastName)

        //sets updated name
        setFirstName(upperCaseFirstName)
        setLastName(upperCaseLastName)
        return upperCaseFirstName + " " + upperCaseLastName;
    }


    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        const fullName = formatFullName(firstName, lastName);
        const success = await addStudent(
            fullName,
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