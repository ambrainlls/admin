import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import { setCV } from '../../../../../redux/slice/hhResumeSlice';
import styles from './contactContainer.module.css';

function ContactContainer() {
    const dispatch = useDispatch();

    const firstName = useSelector((state: RootState) => (state.hhResumeReducer.cv && state.hhResumeReducer.cv.firstName)
        ? state.hhResumeReducer.cv.firstName
        : ''
    );
    const lastName = useSelector((state: RootState) => (state.hhResumeReducer.cv && state.hhResumeReducer.cv.lastName)
        ? state.hhResumeReducer.cv.lastName
        : ''
    );
    const phone = useSelector((state: RootState) => (state.hhResumeReducer.cv && state.hhResumeReducer.cv.phone)
        ? state.hhResumeReducer.cv.phone
        : ''
    );

    return (
        <div>
            <div className={styles.modalField}>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(evt) => {dispatch(setCV({firstName: evt.target.value}))}}
                    placeholder="Name"
                />
            </div>
            <div className={styles.modalField}>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(evt) => {dispatch(setCV({lastName: evt.target.value}))}}
                    placeholder="Lastname"
                />
            </div>
            <div className={styles.modalField}>
                <input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(evt) => {dispatch(setCV({phone: evt.target.value}))}}
                    placeholder="Mobile phone"
                />
            </div>
        </div>
    )
}

export default ContactContainer;
