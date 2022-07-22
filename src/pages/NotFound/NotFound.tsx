import React from 'react';
import styles from './notFound.module.css';
import notFound from '../../assets/images/not-found.png';
import { Link } from 'react-router-dom';

function NotFound(){

    return(
        <div className="notFoundContainer">
            <div className="notFoundImage">
                <img src={notFound} alt="" />
            </div>
            <div className="notFoundMessage">
                <h2>SORRY, THE PAGE YOU REQUESTED DOESN'T EXIST</h2>
                <Link className="notFoundBtn" to="/">Back to home</Link>
            </div>
        </div>
    )
}

export default NotFound;

