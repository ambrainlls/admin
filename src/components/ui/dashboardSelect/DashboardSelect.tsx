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
        width: 140,
        background: "#FFE375",
        borderRadius: "5px",
        "& .MuiOutlinedInput-input": {
            color: "#FFE375"
        },
        "& .MuiInputLabel-root": {
            color: "#000000"
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFFFFF"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#FFE375"
        },
        "&:hover .MuiInputLabel-root": {
            color: "#000000"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFFFFF"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#FFE375"
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#000000"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFFFFF"
        },
        "& .MuiSelect-icon": {
            color: "#000000"
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