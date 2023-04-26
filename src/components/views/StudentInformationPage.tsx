import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import InformationFormDialog from '../InformationFormDialog';
import AddIcon from '@material-ui/icons/Add';

interface StudentInformationPageProps {
  translation: any;
  store: any;
}

//CSS: 
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: '0 auto',
    marginTop: theme.spacing(6),
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  },
  content: {
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    textTransform: 'none',

  }
}));

const StudentInformationPage: React.FC<StudentInformationPageProps> = ({ translation, store }) => {

  const [studentHasInformation, setStudentHasInformation] = useState<boolean>(false); // Example of a string state
  const [openDialog, setOpenDialog] = useState(false);

  const classes = useStyles();

  // const studentInformationExist = (information: any) => {
  //   console.log(information);
  //   let hasInformation = false;
  //   for (const key in information) {
  //     if (Object.hasOwnProperty.call(information, key) && information[key] !== "") {
  //       hasInformation = true;
  //       break;
  //     }
  //   }
  //   setStudentHasInformation(hasInformation);
  // };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmitForm = (student: any) => {
    store.studentStore.setStudentInformation(student.id, student.information)
    handleCloseDialog();
  };

  const informationContent = (
    <CardContent className={classes.content}>
      <Typography variant="h6" gutterBottom>
        Informasjon
      </Typography>
      <Typography align="left">
        Er det kjennskap til dysleksi i familien: {store.studentStore.student.information.dyslexia_in_family}
      </Typography>
      <Typography align="left">
        Er synsundersøkelse gjennomført: {store.studentStore.student.information.vision_examination}
      </Typography>
      <Typography align="left">
        Er hørselsundersøkelse gjennomført: {store.studentStore.student.information.hearing_examination}
      </Typography>
      {/* <Button
        variant="contained"
        color="primary"
        className={classes.button}
      // onClick={onButtonClick}
      >
        Har info
      </Button> */}

    </CardContent>
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
        onClick={handleOpenDialog}
        disableElevation
        startIcon={<AddIcon />}
      >
        Fyll inn informasjon
      </Button>
      <InformationFormDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onSubmit={handleSubmitForm}
        store={store}
      />

    </CardContent>
  )
  const handleButtonClick = () => {
    setStudentHasInformation(!studentHasInformation);
  }

  useEffect(() => {
    const studentInfo = store.studentStore.student.information;
    const hasInformation = Object.values(studentInfo).some(val => val !== "");
    if (hasInformation) {
      setStudentHasInformation(hasInformation);
    }
    // return () => {
    //   // Add cleanup logic here if needed
    // };
  }, [JSON.stringify(store.studentStore.student.information)]);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleButtonClick}
      >
        Infoknapp
      </Button>

      <Card className={classes.card}>
        {studentHasInformation ? informationContent : noInformationContent}
      </Card>

    </div>
  );
};

export default StudentInformationPage;

