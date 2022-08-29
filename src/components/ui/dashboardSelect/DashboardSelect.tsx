import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    makeStyles,
    MenuItem,
    TextField
} from '@material-ui/core';
import styles from './dashboardSelect.module.css';
import {setMetricType} from "../../../redux/slice/metricSlice";

interface DashboardSelectProps {
    label: string;
    options: string[];
    disable: boolean;
}

const useStyles = makeStyles({
    root: {
        width: 200,
        "& .MuiOutlinedInput-input": {
            color: "#1D9BF0"
        },
        "& .MuiInputLabel-root": {
            color: "#1D9BF0"
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1D9BF0"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#1D9BF0"
        },
        "&:hover .MuiInputLabel-root": {
            color: "#1D9BF0"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1D9BF0"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#1D9BF0"
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#1D9BF0"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1D9BF0"
        },
        "& .MuiSelect-icon": {
            color: "#1D9BF0"
        }
    }
})

function DashboardSelect ({ label, options, disable }: DashboardSelectProps) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = evt.target;
        setValue(value);
        dispatch(setMetricType(value));
    }

    return (
        <>
            <TextField
                className={classes.root}
                value={value}
                onChange={(evt) => {handleChange(evt)}}
                variant="outlined"
                label={label}
                select
                disabled={disable}
            >
                {
                    options.map((option, idx) => {
                        return (
                            <MenuItem value={option} key={idx}>{option}</MenuItem>
                        )
                    })
                }
            </TextField>
        </>
    )
}
export default DashboardSelect;