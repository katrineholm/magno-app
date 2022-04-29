import TextField from '@material-ui/core/TextField';
import React from 'react';
import { InputAdornment, OutlinedInputProps } from '@material-ui/core';




interface SearchFieldProps {
    label: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    icon: any;
  }

export default function SearchField(props: SearchFieldProps) {

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setValue(e.target.value)
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
                disableUnderline: true,
                startAdornment: (
                    <InputAdornment position="start" style={{paddingLeft: "10px"}}>
                      {props.icon}
                    </InputAdornment>
                ),
                }as Partial<OutlinedInputProps>}
        />
    );
}

