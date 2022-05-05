import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/core/styles';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import {addStudent} from './Communicator'
import { v4 as uuidv4 } from 'uuid';

const styles = (theme: any) => ({
  dialogBox: {
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
  fetchStudents: () => void;
}

function StudentFormDialog(props: StudentFormDialogProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [grade, setGrade] = useState<string | unknown>('');
  const [classLetter, setClassLetter] = useState<string | unknown>('');
  const {classes} = props;
  

    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value)
    }

    function handleGradeChange(event: React.ChangeEvent<{ value: string | unknown }>) {
        setGrade(event.target.value)
    }

    function handleClassLetterChange(event: React.ChangeEvent<{ value: string | unknown }>) {
        setClassLetter(event.target.value)
    }

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        const data = await addStudent(uuidv4(), firstName + " " + lastName, String(grade) + String(classLetter))
        if (data !== undefined){
            if (data.result.includes("Success")){
                props.fetchStudents();
                props.store.viewStore.setSnackBar(firstName + " " + lastName + " ble lagt til", 'success');
                props.store.viewStore.setOpenSnackBar(true);
                props.setOpen(false)
            }
            else {
                props.store.viewStore.setSnackBar("En ukjent feil oppsto", 'error');
                props.store.viewStore.setOpenSnackBar(true);
                props.setOpen(false)
            }
        }
        
        setFirstName("");
        setLastName("");
        setGrade("");
        setClassLetter("");
    }

  return (

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
                    <FormControl required style={{ minWidth: 80 }}>
                        <InputLabel id="select-grade">Trinn</InputLabel>
                        <Select
                            labelId="Trinn"
                            id="Trinn"
                            required
                            value={grade}
                            label="Trinn"
                            onChange={handleGradeChange}
                        >
                            {props.store.studentStore.grades
                            .map((grade: string, index: number) => {
                                return (
                                    <MenuItem key={index} value={grade}>{grade}</MenuItem>
                                )
                                }
                            )}
                        </Select>
                    </FormControl>
                    <FormControl required style={{ minWidth: 90, paddingLeft: 6 }}>
                        <InputLabel style={{ paddingLeft: 7 }} id="select-class">Klasse</InputLabel>
                        <Select
                            labelId="Klasse"
                            id="Klasse"
                            value={classLetter}
                            label="Klasse"
                            onChange={handleClassLetterChange}
                        >
                            {props.store.studentStore.classLetters
                            .map((classLetter: string, index: number) => {
                                return (
                                    <MenuItem key={index} value={classLetter}>{classLetter}</MenuItem>
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
                        Legg til elev
                    </Button>
                </form>
            </DialogContent>
            
        </Dialog>

  );
}

export default withStyles(styles)(StudentFormDialog);