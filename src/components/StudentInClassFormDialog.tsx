import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { addStudent } from './Communicator'
import { Grid } from '@material-ui/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import { Student } from './Interfaces';
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
    const [studentsToAdd, setStudentsToAdd] = useState<Array<Student>>([])
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [textFields, setTextFields] = useState<string[]>([]);
    const { classes } = props;


    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value)
    }
   
    const handleAddTextField = () => {
        setTextFields([...textFields, ""]);
    };
    
    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const newTextFieldValues = [...textFields];
        newTextFieldValues[index] = event.target.value;
        setTextFields(newTextFieldValues);
    };

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        const data = await addStudent(
            firstName + " " + lastName,
            String(props.classNameProp),
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
                <h4>Klasse: {props.classNameProp}</h4> 

                <div>
                    {textFields.map((field, index) => (
                        <TextField
                        key={index}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id={`field-${index}`}
                        label={`Field ${index + 1}`}
                        name={`field-${index}`}
                        autoComplete={`field-${index}`}
                        autoFocus={index === 0}
                        //onChange={handleTextFieldChange(index)}
                        value={field}
                        />
                    ))}
                    {//isFirstTextFieldFilled && (
                        <Button variant="contained" color="primary" onClick={handleAddTextField}>
                        Add Field
                        </Button>
                    }
                    </div>



                <Grid container spacing={2}>
                    <Grid item xs={6}>
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
                        value={firstName}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                        value={lastName}
                        />
                    </Grid>
                </Grid>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                   <IconButton edge="end" onClick={handleAddTextField}>
                        <AddCircleIcon />
                   </IconButton>
                </div>

                <div>

                </div>
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

export default withStyles(styles)(StudentInClassFormDialog);