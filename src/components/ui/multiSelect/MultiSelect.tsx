import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Checkbox, ListItemText} from "@mui/material";
import {useEffect} from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

interface MultiSelectProps {
    options: any[];
    handleSelectedOptions: (selectedOptionIds: string[]) => void;
    selectedOptions: any[];
    optionKey: string;
    label: string;
}
const  MultiSelect = ({
    options,
    handleSelectedOptions,
    selectedOptions,
    optionKey,
    label
    }: MultiSelectProps) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    useEffect(() => {
        setPersonName(selectedOptions);
    }, []);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;

        const selectedOptionIds: string[] = [];

        if (typeof value !== 'string') {
            value.forEach(val => {
                for(const option of options) {
                    if (val === option[optionKey]) {
                        selectedOptionIds.push(option.id);
                        break;
                    }
                }
            });
        }

        handleSelectedOptions(selectedOptionIds);

        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ width: '100%' }}>
                <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option.id}
                            value={option[optionKey]}
                            style={getStyles(option[optionKey], personName, theme)}
                        >
                            <Checkbox checked={personName.indexOf(option[optionKey]) > -1} />
                            <ListItemText primary={option[optionKey]} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default MultiSelect;



