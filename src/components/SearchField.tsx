import TextField from '@material-ui/core/TextField';
import React from 'react';
import { InputAdornment, OutlinedInputProps } from '@material-ui/core';
import { Student } from './Interfaces'

interface SearchFieldProps {
    label: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setFilteredStudents: React.Dispatch<React.SetStateAction<Array<Student>>>;
    students: Array<Student>
    value: string;
    icon: any;
  }

export default function SearchField(props: SearchFieldProps) {
    const students: Array<Student> = []

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setValue(e.target.value)
        if (e.target.value !== ""){
            props.students.forEach(student => {
                if (student.name.toLowerCase().includes(e.target.value.toLowerCase())){
                    students.push(student)
                }
            });
            props.setFilteredStudents(students)
        }
        else{
            props.setFilteredStudents(props.students)
        }
    }

    return (
        <TextField
            variant="outlined"
            id={props.label}
            label={props.label}
            name={props.label}
            onChange={handleSearchChange}
            value={props.value}
            style={{width: "25vw"}}
            InputProps={{ 
                startAdornment: (
                    <InputAdornment position="start" style={{paddingLeft: "10px"}}>
                      {props.icon}
                    </InputAdornment>
                ),
                }as Partial<OutlinedInputProps>}
        />
    );
}

