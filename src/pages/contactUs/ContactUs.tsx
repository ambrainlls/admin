import React from 'react';
import ContactUsLayout from '../../components/layouts/contactUsLayout/ContactUsLayout';
import styles from './contactUs.module.css';

function ContactUs(){
    return (
        <div className={styles.contactUsContainer}>
           <ContactUsLayout />
        </div>
    )
}

export default ContactUs;

