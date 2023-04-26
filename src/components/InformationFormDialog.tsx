import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { Typography, Button } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { updateStudentInformation } from './Communicator';
import { resourceLimits } from "worker_threads";
import { StudentStore } from "./stores/StudentStore";




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


interface InformationFormProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (formData: FormData) => void;
    store: any;
}


interface FormData {
    [key: string]: string; // Add index signature for dynamic keys
}


const InformationForm: React.FC<InformationFormProps> = ({ open, onClose,
    onSubmit, store }) => {
    const options = ["Ja", "Nei", "Vet ikke"];
    const [formData, setFormData] = useState<FormData>({
        dyslexia_in_family: "",
        vision_examination: "",
        hearing_examination: "",
    });

    const handleSubmit = async () => {
        console.log("formData: ", formData)
        //Oppdatere student store
        //Sende endringer til backend i databasen
        // console.log("student:", store.studentStore.student.name)
        const updatedStudent = await updateStudentInformation(formData.dyslexia_in_family, formData.vision_examination, formData.hearing_examination, store.studentStore.student.id)
        // console.log("IDen", updatedStudent.id)
       
        // store.studentStore.setStudent(updatedStudent.id)
        console.log("result", updatedStudent)
        // onSubmit(formData);
        onSubmit(updatedStudent)
    };

    const handleClose = () => {
        onClose();
    };
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>, field: string) => {
        setFormData((prevFormData) => ({ ...prevFormData, [field]: event.target.value as string }));
    };


    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Fyll inn informasjon</DialogTitle>


            <DialogContent>
                {[
                    { field: "dyslexia_in_family", label: "Er det kjennskap til dysleksi i familien?" },
                    { field: "vision_examination", label: "Er det gjennomført synsundersøkelse?" },
                    { field: "hearing_examination", label: "Er det gjennomført hørselsundersøkelse?" }
                ].map((fieldData, index) => (
                    <FormControl variant="outlined" fullWidth key={index}>
                        <Typography>{fieldData.label}</Typography>
                        <Select
                            value={formData[fieldData.field]}
                            onChange={(event) => handleChange(event, fieldData.field)}
                            label="Velg et alternativ"
                        >
                            {options.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                ))}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default InformationForm;