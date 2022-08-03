import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCV } from '../../../../../redux/slice/hhResumeSlice';
import styles from './birthdayPickerForResume.module.css';

const months: any = {
    January: '31',
    February: '29',
    March: '31',
    April: '30',
    May: '31',
    June: '30',
    July: '31',
    August: '31',
    September: '30',
    October: '31',
    November: '30',
    Decembe: '31',
};

const monthDays: any = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    Decembe: '12',
};

function BirthdayPickerForResume() {
    const dispatch = useDispatch();

    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMounth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    useEffect(() => {
        if (selectedDay && monthDays[selectedMonth] && selectedYear && selectedYear.length === 4) {
            dispatch(setCV({birthday: `${selectedDay}/${monthDays[selectedMonth]}/${selectedYear}`}));
        }
    },[selectedDay, selectedMonth, selectedYear]);

    const dayOptions: any = useMemo(() => {
        const newOptions: any  = [
            <option hidden={true} key={0}>
                DAY
            </option>
        ];
        for(let i = 1; i <= months[selectedMonth]; i++){
            newOptions.push(
                <option key={i}>{i}</option>
            )
        }
        return newOptions;
    }, [selectedMonth]);

    return (
        <div className={`${styles.birthDaySection}`}>
            <div className={styles.birthDayField}>
                <select
                    id="day"
                    value={selectedDay}
                    onChange={(evt) => setSelectedDay(evt.target.value)}
                    disabled={!selectedMonth}
                >
                    {dayOptions}
                </select>
            </div>
            <div className={styles.birthDayField}>
                <select
                    id="mounth"
                    value={selectedMonth}
                    onChange={(evt) => setSelectedMounth(evt.target.value)}
                >
                    <option hidden={true}>
                      MOUNT
                    </option>
                    {
                        Object.keys(months).map(mount => {
                            return (
                                <option
                                    key={mount}
                                    value={mount}
                                >
                                    {mount}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <div className={styles.birthDayField}>
                <input
                    id="year"
                    type="number"
                    min={1900}
                    max={3000}
                    value={selectedYear}
                    onChange={(evt) => setSelectedYear(evt.target.value)}
                    placeholder={'YEAR'}
                />
            </div>
        </div>
    )
}

export default BirthdayPickerForResume;
