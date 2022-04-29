import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react';
  
const students = ["Jack", "Mari", "Anders", "Erik", "Thomas", "Ingrid", "Laila", "Bryan","Ola"
];

export default function SearchBox(props: any) {
  const [value, setValue] = React.useState<string | null>();
  const [inputValue, setInputValue] = React.useState('');

    return (
    <Autocomplete
        ListboxProps={{ style: { maxHeight: 150, overflow: 'auto' } }}
        disablePortal
        id="search-box"
        options={students}
        value={value}
        onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
        }}
        renderInput={(params) => <TextField variant={"outlined"} {...params} label={props.textfieldLabel} />}
        />
    );
}

