import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react';
  


interface SearchBoxProps {
    setValue: React.Dispatch<React.SetStateAction<string | null | undefined>>;
    students: string[];
    value: string | null | undefined;
    textfieldLabel: string;
}

export default function SearchBox(props: SearchBoxProps) {
  const [inputValue, setInputValue] = useState('');

    return (
    <Autocomplete
        ListboxProps={{ style: { maxHeight: 150, overflow: 'auto' } }}
        disablePortal
        id="search-box"
        options={props.students}
        value={props.value}
        onChange={(event: any, newValue: string | null) => {
            props.setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
        }}
        renderInput={(params) => <TextField variant={"outlined"} {...params} label={props.textfieldLabel} />}
        />
    );
}

