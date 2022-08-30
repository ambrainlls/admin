import React, { useState, useEffect } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Checkbox, ListItemText } from '@mui/material';

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

interface MultiSelectProps {
    options: any[];
    handleSelectedOptions: (selectedOptionIds: string[]) => void;
    defaultSelectedOptions: any[];
    optionKey: string;
    label: string;
}
const  MultiSelect = ({
    options,
    handleSelectedOptions,
    defaultSelectedOptions,
    optionKey,
    label
    }: MultiSelectProps) => {
    const theme = useTheme();
    const [personName, setPersonName] = useState<string[]>([]);
    const [selectedOptionIds, setSelectedOptionIds] = useState<Set<string>>(new Set());

    useEffect(() => {
        const newSelectedOptions = defaultSelectedOptions.map(item => item[optionKey]);
        setPersonName(newSelectedOptions);
        const ids = defaultSelectedOptions.map(item => item.id);
        const selectedOptionIds = new Set(ids);

        setSelectedOptionIds(selectedOptionIds);
    }, []);

    useEffect(() => {
        const newPersonName: string[] = [];
        options.forEach(item => {
            if (selectedOptionIds.has(item.id)) {
                newPersonName.push(item[optionKey]);
            }
        });

        setPersonName(newPersonName);
    }, [selectedOptionIds.size]);

    const handleOptionClick = (option: any) => {
        if (selectedOptionIds.has(option.id)) {
            const newSelectedOptionIds = new Set(selectedOptionIds);
            newSelectedOptionIds.delete(option.id);

            setSelectedOptionIds(newSelectedOptionIds);
            handleSelectedOptions(Array.from(newSelectedOptionIds));
        } else {
            const newSelectedOptionIds = new Set(selectedOptionIds);
            newSelectedOptionIds.add(option.id);

            setSelectedOptionIds(newSelectedOptionIds);
            handleSelectedOptions(Array.from(newSelectedOptionIds));
        }
    };

    const isChecked = (option: any) => {
        return selectedOptionIds.has(option.id);
    };

    const getStyles = (option: any, personName: readonly string[], theme: Theme) => {
        return {
            fontWeight:
                personName.indexOf(option[optionKey]) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
            background: selectedOptionIds.has(option.id) ? 'AliceBlue' : ''
        };
    };

    return (
        <div>
            <FormControl sx={{ width: '100%' }}>
                <InputLabel id="demo-multiple-checkbox-label">
                    {label}
                </InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option.id}
                            value={option}
                            style={getStyles(option, personName, theme)}
                            onClick={(evt) => handleOptionClick(option)}
                        >
                            <Checkbox checked={isChecked(option)} />
                            <ListItemText primary={option[optionKey]} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default MultiSelect;



