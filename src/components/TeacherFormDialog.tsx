import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { FormControl, InputLabel, MenuItem, Select, List, ListItem, IconButton, ListItemText, ListItemSecondaryAction, DialogContentText, DialogActions } from '@material-ui/core';
import { Teacher } from './Interfaces';
import { assignTeacherToClass, removeTeacherFromClass } from './Communicator';
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
    outlined: {
        borderWidth: '1px 0',
        borderStyle: 'solid',
        borderColor: theme.palette.divider,
      },
});

interface TeacherFormDialogProps {
    store: any;
    open: boolean;
    setOpen: (open: boolean) => void;
    classes: any;
    translation: any;
    teachers: Array<Teacher>;
    className: string | undefined;
}

function TeacherFormDialog(props: TeacherFormDialogProps) {
    const [deleteTeacher, setDeleteTeacher] = useState<Teacher | null>(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [addTeacher, setAddTeacher] = useState<string>("");
    const { classes } = props;

    function handleDeleteTeacher(teacher: Teacher) {
        setDeleteTeacher(teacher);
        setOpenDeleteDialog(true);
    }
    
    function handleTeacherChange(event: React.ChangeEvent<{ value: unknown }>) {
        setAddTeacher(event.target.value as string);
    }
    async function handleDeleteConfirmation() {
        if (deleteTeacher) {
          const data = await removeTeacherFromClass(deleteTeacher.id, props.className)
          if (data !== undefined) {
            if (data.result.includes("Success")) {
                props.store.viewStore.setOpenSnackBar(true);
                props.setOpen(false)
            }
            else {
                props.store.viewStore.setSnackBar(props.translation.classFormDialog.errorMessage, 'error');
                props.store.viewStore.setOpenSnackBar(true);
                props.setOpen(false)
            }
          setDeleteTeacher(null);
          setOpenDeleteDialog(false);
        }
      }
    }
    
    function handleDeleteCancel() {
        setDeleteTeacher(null);
        setOpenDeleteDialog(false);
    }

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        if ((addTeacher && addTeacher !== "") && props.className !== undefined) {
            const data = await assignTeacherToClass(addTeacher, props.className)
        }
    }

    return (
        <React.Fragment>

        <Dialog
            fullWidth={true}
            maxWidth={"sm"}
            open={props.open}
            scroll={'body'}
            onClose={() => props.setOpen(false)}
        >
            <DialogTitle style={{ textAlign: 'center' }}>
                {props.translation.teacherFormDialog.title}
            </DialogTitle>
            <DialogContent className={classes.dialogBox}>
                <form name="TeacherForm" onSubmit={handleSubmit} className={classes.form}>

                    <List>
                        {props.teachers.map((value, index) => {
                            return(
                            <ListItem key={index} className={classes.outlined}>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" 
                                        onClick={( )=> handleDeleteTeacher(value)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>                      
                                <ListItemText
                                    primary={value.name}
                                />
                        </ListItem>)})}
                    </List>
                    <DialogTitle style={{ textAlign: 'center' }}>
                        {props.translation.teacherFormDialog.titleAdd}
                    </DialogTitle>

                    <FormControl style={{ minWidth: 90, padding: 6, paddingTop: 10, paddingBottom: 20 }} fullWidth>
                        <InputLabel style={{ paddingLeft: 7 }} id="select-teacher">{props.translation.teacherFormDialog.labelNewTeacher}</InputLabel>
                        <Select
                            id="teacher"
                            value={addTeacher}
                            label={props.translation.teacherFormDialog.labelNewTeacher}
                            onChange={handleTeacherChange}
                        >
                            <MenuItem value="">{props.translation.classFormDialog.noTeacherOption}</MenuItem>
                            {props.store.teacherStore.teacherList
                            .filter((item: Teacher) => !props.teachers.some((t: Teacher) => t.id === item.id))
                            .map((teacher: any, index: number) => (
                                <MenuItem key={index} value={teacher.id}>{teacher.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        {props.translation.teacherFormDialog.buttonLabel}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>

        <Dialog
                open={openDeleteDialog}
                onClose={handleDeleteCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
            {props.translation.teacherFormDialog.alertTitle}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {props.translation.teacherFormDialog.areYouSure1}{" "}
                {deleteTeacher ? deleteTeacher.name : ""} {props.translation.teacherFormDialog.areYouSure2} {props.className}?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleDeleteCancel} color="primary">
                {props.translation.teacherFormDialog.cancel}
            </Button>
            <Button onClick={handleDeleteConfirmation} color="primary" autoFocus>
                {props.translation.teacherFormDialog.confirm}
            </Button>
            </DialogActions>
        </Dialog>
        
        </React.Fragment>
    );
}

export default withStyles(styles)(TeacherFormDialog);