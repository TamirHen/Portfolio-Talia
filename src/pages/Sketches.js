import React from 'react';
import './Sketches.css';
import Grid from '../components/Grid';

const Sketches = (props) => {
    const {pages} = props.data
    const {sketches} = pages

    return (
        <div className="sketches-page-container">
            {sketches.grid && <Grid page={pages.sketches} {...props} />}
        </div>
    );
};

export default Sketches;