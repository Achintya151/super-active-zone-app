import React from 'react';

const ExerciseDetails = (props) => {
    return (
        <div className='d-flex justify-content-between bg-light p-3 mt-2 rounded'>
            <h5>{props.name}</h5>
            <p>0s</p>
        </div>
    );
};

export default ExerciseDetails;