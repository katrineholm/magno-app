import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import InformationFormDialog from '../InformationFormDialog';
import AddIcon from '@material-ui/icons/Add';

// Props interface
interface StudentInformationPageProps {
  prop1: string;
  prop2: number;
}

// interface FormDataType {
//   // Define the type for formData
//   // Example fields, replace with actual form field names and types
//   field1: string;
//   field2: number;
//   field3: boolean;
// }

//CSS: 
const useStyles = makeStyles((theme) => ({
  card: {
    // Define your card styles here
    maxWidth: 600,
    margin: '0 auto',
    marginTop: theme.spacing(6),
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  },
  content: {
    // Define your card content styles here
    padding: theme.spacing(2),
  },
  button: {
    // Define your button styles here
    marginTop: theme.spacing(2),
    textTransform: 'none', // Remove text transformation (e.g., uppercase)

  }
}));


// Component
const StudentInformationPage: React.FC<StudentInformationPageProps> = ({ prop1, prop2 }) => {
  // State hooks
  const [information, setInformation] = useState<boolean>(false); // Example of a string state
  const [openDialog, setOpenDialog] = useState(false);
  // const [state2, setState2] = useState<number>(0); // Example of a number state
  const classes = useStyles();


  const handleOpenDialog = () => {
    setOpenDialog(true); // Set openDialog state to true to open the dialog
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Set openDialog state to false to close the dialog
  };

  const handleSubmitForm = () => {
    console.log("Form data submitted:"); // Handle form data submission
    // console.log(formData)
    handleCloseDialog(); // Close the dialog after form submission
  };



  const informationContent = (
    <CardContent className={classes.content}>
      <Typography variant="h6" gutterBottom>
        {prop1}
      </Typography>
      <Typography variant="body1">{prop2}</Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
      // onClick={onButtonClick}
      >
        Har info
      </Button>

    </CardContent>

  )

  const noInformationContent = (
    <CardContent className={classes.content}>
      <Typography variant="h6" gutterBottom>
        {prop1}
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
      />




    </CardContent>
  )
  const handleButtonClick = () => {
    setInformation(!information);
  }



  // Effect hook
  useEffect(() => {
    // Code to run on component mount or when state/props change
    // Example: fetch data, subscribe to events, etc.
    return () => {
      // Cleanup code (optional)
      // Example: unsubscribe from events, clean up resources, etc.
    };
  }, [prop1, prop2]); // Dependency array

  // Component JSX
  return (
    <div>
      {/* <h1>{prop1}</h1>
      <p>{prop2}</p> */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleButtonClick}
      >
        Infoknapp
      </Button>

      <Card className={classes.card}>
        {information ? informationContent : noInformationContent}
      </Card>

    </div>
  );
};

export default StudentInformationPage;