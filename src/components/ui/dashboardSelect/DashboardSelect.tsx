import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    makeStyles,
    MenuItem,
} from '@material-ui/core';
import { setMetricType } from '../../../redux/slice/metricSlice';
import { Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import styles from './dashboardSelect.module.css';

interface DashboardSelectProps {
    label: string;
    options: string[];
    disable: boolean;
}

const useStyles = makeStyles(theme => ({
    quantityRoot: {
        borderRadius: "5px",
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
    },
}));

function DashboardSelect ({ label, options, disable }: DashboardSelectProps) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [value, setValue] = useState('Git metric');

    const handleChange = (evt: any) => {
        const { value } = evt.target;
        setValue(value);
        dispatch(setMetricType(value));
    }

    return (
        <>
            <FormControl sx={{minWidth: 140, background: "#FFE375", border: "none"}} classes={{
                root: classes.quantityRoot
            }}>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={value}
                    label={label}
                    onChange={(evt) => handleChange(evt)}
                    inputProps={{
                        name: "gpuChildQuantity",
                        id: "gpuChildQuantity"
                    }}
                >
                    {
                        options.map((option, idx) => {
                            return (
                                <MenuItem value={option} key={idx}>{option}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </>
    )
}
export default DashboardSelect;