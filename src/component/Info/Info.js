import React from 'react';
import profile from '../../images/Photo less than 50kb.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import AddBreak from '../AddBreak/AddBreak';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';


const Info = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <img className='proPic' src={profile} alt="" />
                <div>
                    <h5>Achintya Kumar Talukdar</h5>
                    <div className='d-flex'>
                        <p className='me-2'><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon></p>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-around bg-primary rounded'>
                <div>
                    <h5>75 <span>kg</span></h5>
                    <h6>Weight</h6>
                </div>
                <div>
                    <h5>5.10 <span>ft</span></h5>
                    <h6>Height</h6>
                </div>
                <div>
                    <h5>25 <span>yrs</span></h5>
                    <h6>Age</h6>
                </div>
            </div>

            <AddBreak></AddBreak>

            <div>
                <h5>Exercise Details</h5>
                <ExerciseDetails name='Exercise Time'></ExerciseDetails>
                <ExerciseDetails name='Break Time'></ExerciseDetails>
            </div>

            <div className='d-grid text-center'>
                <button type="button" class="btn btn-primary">Activity Completed</button>
            </div>
        </div >
    );
};

export default Info;