import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { Typography, Button } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';


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
}


interface FormData {
    field_dyslexia_in_family: string;
    field_vision_examination: string;
    [key: string]: string; // Add index signature for dynamic keys
}


const InformationForm: React.FC<InformationFormProps> = ({ open, onClose, onSubmit }) => {
    const options = ["ja", "nei", "vet ikke"];
    // const [dyslexiaInFamily, setDyslexiaInFamily] = useState('');
    // const [visionExamination, setVisionExamination] = useState('');
    // const [hearingExamination, setHearingExamination] = useState('');
    // const [inputValue, setInputValue] = useState("");
    const [formData, setFormData] = useState<FormData>({
        field_dyslexia_in_family: "",
        field_vision_examination: "",
    });


    // const handleDyslexiaInFamilyChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setDyslexiaInFamily(event.target.value as string);
    // };
    // const handleVisionExaminationChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setVisionExamination(event.target.value as string);
    // };
    // const handleHearingExaminationChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setHearingExamination(event.target.value as string);
    // };

    const handleSubmit = () => {
        console.log(formData)
        //Oppdatere student store
        //Sende endringer til backend i databasen
        onSubmit(formData);
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
                    { field: "field_dyslexia_in_family", label: "Er det kjennskap til dysleksi i familien?" },
                    { field: "field_vision_examination", label: "Er det gjennomført synsundersøkelse?" },
                    { field: "field_hearing_examination", label: "Er det gjennomført hørselsundersøkelse?" }
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