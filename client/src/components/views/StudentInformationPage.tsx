import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import InformationFormDialog from '../InformationFormDialog';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { updateStudentInformation } from '../Communicator';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

interface StudentInformationPageProps {
  translation: any;
  store: any;
}


//CSS: 
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: '0 auto',
    marginTop: theme.spacing(10),
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  },
  content: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(5)
  },
  button: {
    marginTop: theme.spacing(2),
    textTransform: 'none',

  },
  information: {
    marginLeft: 25,
    textAlign: "left",
  }
}));

const StudentInformationPage: React.FC<StudentInformationPageProps> = ({ translation, store }) => {
  const [studentHasInformation, setStudentHasInformation] = useState<boolean>(false); // Example of a string state
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const classes = useStyles();

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };
  const updateStudentStore = (student: any) => {
    store.studentStore.setStudentInformation(student.id, student.information)
  };

  const handleSubmitForm = (student: any) => {
    updateStudentStore(student)
    handleCloseEditDialog();
  };

  const handleDeleteConfirmation = async () => {
    const updatedStudent = await updateStudentInformation("", "", "", "", store.studentStore.student.id)
    updateStudentStore(updatedStudent)
    setStudentHasInformation(false)
    handleCloseDeleteDialog()
  };

  const informationContent = (
    <CardContent className={classes.content}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '10px', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Informasjon
        </Typography>
        <IconButton edge="end" aria-label="delete"
          onClick={handleOpenDeleteDialog}>
          <DeleteIcon />
        </IconButton>

        <IconButton
          onClick={handleOpenEditDialog}>
          <EditIcon />
        </IconButton>
        <InformationFormDialog
          open={openEditDialog}
          onClose={handleCloseEditDialog}
          onSubmit={handleSubmitForm}
          store={store}
        />
      </div>
      <Typography className={classes.information}>
        Er det kjennskap til dysleksi i familien: {store.studentStore.student.information.dyslexia_in_family}
      </Typography>
      <Typography className={classes.information}>
        Er synsundersøkelse gjennomført: {store.studentStore.student.information.vision_examination}
      </Typography>
      <Typography className={classes.information}>
        Er hørselsundersøkelse gjennomført: {store.studentStore.student.information.hearing_examination}
      </Typography>
      <Typography className={classes.information}>
        Kommentar: {store.studentStore.student.information.comment}
      </Typography>

      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Er du sikker på at du vil slette informasjon om {store.studentStore.student.name}?
        </DialogTitle>
        < DialogActions >
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Avbryt
          </Button>
          <Button onClick={handleDeleteConfirmation} color="primary" autoFocus>
            Lagre endringer
          </Button>
        </DialogActions >
      </Dialog >

    </CardContent >
  )

  const noInformationContent = (
    <CardContent className={classes.content}>
      <Typography variant="h6" gutterBottom>
        Informasjon
      </Typography>
      <Typography variant="body1">Det er ikke fylt inn noen informasjon om eleven ennå</Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleOpenEditDialog}
        disableElevation
        startIcon={<AddIcon />}
      >
        Fyll inn informasjon
      </Button>
      <InformationFormDialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        onSubmit={handleSubmitForm}
        store={store}
      />
    </CardContent>
  )

  useEffect(() => {
    const studentInfo = store.studentStore.student.information;
    console.log("Kommer inn på siden og ser studenten", store.studentStore.student)
    const hasInformation = Object.values(studentInfo).some(val => val !== "");
    if (hasInformation) {
      setStudentHasInformation(hasInformation);
    } else if (Object.values(studentInfo).every(val => val === "")) {
      setStudentHasInformation(false);
    }
  }, [JSON.stringify(store.studentStore.student.information)]);
  return (
    <div>
      <Card className={classes.card}>
        {studentHasInformation ? informationContent : noInformationContent}
      </Card>

    </div>
  );
};

export default StudentInformationPage;

