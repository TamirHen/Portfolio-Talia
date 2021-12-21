import React from 'react';
import './GoTo.css';
import {ReactComponent as ArrowIcon} from '../assets/right-arrow-svg.svg';
import {Link} from "react-router-dom";

const GoTo = () => {
    return (
        <div className='goto-wrapper'>
            <ArrowIcon/>
        </div>
    );
};

export default GoTo;