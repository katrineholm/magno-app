import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { addClass } from './Communicator';
import { v4 as uuidv4 } from 'uuid';

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

interface ClassFormDialogProps {
    store: any;
    open: boolean;
    setOpen: (open: boolean) => void;
    classes_: any;
    translation: any;
    fetchClasses: () => void;
    teachers: any;
}

function ClassFormDialog(props: ClassFormDialogProps) {
    const [grade, setGrade] = useState<string | unknown>('');
    const [classLetter, setClassLetter] = useState<string | unknown>('');
    const [teacherId, setTeacherId] = useState<string | unknown>('');
    const { classes_ } = props;


    function handleGradeChange(event: React.ChangeEvent<{ value: string | unknown }>) {
        setGrade(event.target.value)
    }

    function handleClassLetterChange(event: React.ChangeEvent<{ value: string | unknown }>) {
        setClassLetter(event.target.value)
    }

    function handleTeacherChange(event: React.ChangeEvent<{ value: string | unknown }>) {
        setTeacherId(event.target.value)
    }

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        const data = await addClass(
            uuidv4(),
            String(grade) + String(classLetter),
            props.store.userStore.school,
            String(teacherId)
        )
        if (data !== undefined) {
            if (data.result.includes("Success")) {
                props.fetchClasses();
                props.store.viewStore.setSnackBar(props.translation.classFormDialog.successMessage, 'success');
                props.store.viewStore.setOpenSnackBar(true);
                props.setOpen(false)
            }
            else {
                props.store.viewStore.setSnackBar(props.translation.classFormDialog.errorMessage, 'error');
                props.store.viewStore.setOpenSnackBar(true);
                props.setOpen(false)
            }
        }

        setGrade("");
        setClassLetter("");
        setTeacherId("");
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
                {props.translation.classFormDialog.title}
            </DialogTitle>
            <DialogContent className={classes_.dialogBox}>
                <form name="SignInForm" onSubmit={handleSubmit} className={classes_.form}>
                    <FormControl required style={{ minWidth: 80 }}>
                        <InputLabel id="select-grade">{props.translation.classFormDialog.labelGrade}</InputLabel>
                        <Select
                            labelId="Klasse"
                            id="Klasse"
                            required
                            value={grade}
                            label={props.translation.classFormDialog.labelGrade}
                            onChange={handleGradeChange}
                        >
                            {props.store.classStore.grades
                                .map((grade: string, index: number) => {
                                    return (
                                        <MenuItem key={index} value={grade}>{grade}</MenuItem>
                                    )
                                }
                                )}
                        </Select>
                    </FormControl>
                    <FormControl required style={{ minWidth: 90, paddingLeft: 6 }}>
                        <InputLabel style={{ paddingLeft: 7 }} id="select-class">{props.translation.classFormDialog.labelClassLetter}</InputLabel>
                        <Select
                            labelId="Klasse"
                            id="Klasse"
                            value={classLetter}
                            label={props.translation.classFormDialog.labelClassLetter}
                            onChange={handleClassLetterChange}
                        >
                            {props.store.classStore.classLetters
                                .map((classLetter: string, index: number) => {
                                    return (
                                        <MenuItem key={index} value={classLetter}>{classLetter}</MenuItem>
                                    )
                                }
                                )}
                        </Select>
                    </FormControl>
                    {/* Her legges det til lærer */}
                    <FormControl required style={{ minWidth: 90, padding: 6, paddingTop: 10, paddingBottom: 20 }} fullWidth>
                        <InputLabel style={{ paddingLeft: 7 }} id="select-teacher">{props.translation.classFormDialog.labelTeacher}</InputLabel>
                        <Select
                            labelId="Ansvarlig lærer"
                            id="teacher"
                            value={teacherId}
                            label={props.translation.classFormDialog.labelTeacher}
                            onChange={handleTeacherChange}
                        >
                            {props.store.teacherStore.teacherList
                                .map((teacher: any, index: number) => {
                                    return (
                                        <MenuItem key={index} value={teacher.id}>{teacher.name}</MenuItem>
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
                        className={classes_.submit}>
                        {props.translation.classFormDialog.buttonLabel}
                    </Button>
                </form>
            </DialogContent>

        </Dialog>

    );
}

export default withStyles(styles)(ClassFormDialog);