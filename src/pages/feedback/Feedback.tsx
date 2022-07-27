import React from 'react';
import FeedbackLayout from '../../components/layouts/feedbackLayout/FeedbackLayout';
import styles from './feedback.module.css';

function Feedback(){
    return (
        <div className={styles.feedbackContainer}>
            <FeedbackLayout />
        </div>
    )
}

export default Feedback;

