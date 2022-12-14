import React, { useEffect, useState } from 'react';
import profile from '../../images/Photo less than 50kb.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import bootstrapBundle from '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';



const Info = (props) => {
    const [breaks, setBreak] = useState(0);

    const handleChange = (e) => {
        const showBreak = parseInt(e.target.innerText);

        localStorage.setItem("break", showBreak);
        setBreak(showBreak);
        // const item = JSON.parse(localStorage.getItem('break'));
        // if (item) {
        //     setBreak(item);
        // }

    }
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('break'));
        if (item) {
            setBreak(item);
        }

    }, [])

    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = new bootstrapBundle.Toast(toastLiveExample)

            toast.show()
        })
    }

    return (
        <div className='d-flex flex-column justify-content-center'>
            <div className='d-flex justify-content-center mb-5'>
                <img className='proPic' src={profile} alt="" />
                <div>
                    <h5>Achintya Kumar Talukdar</h5>
                    <div className='d-flex'>
                        <p className='me-2'><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon></p>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-around bg-secondary text-white rounded mb-5 py-3'>
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

            <div className='mb-5'>
                <h5>Add A Break</h5>
                <div className='d-flex justify-content-around bg-light p-3 rounded mt-4'>
                    <button onClick={(e) => handleChange(e)} className='btn btn-success rounded-circle p-3'>10</button>
                    <button onClick={(e) => handleChange(e)} className='btn btn-success rounded-circle p-3'>20</button>
                    <button onClick={(e) => handleChange(e)} className='btn btn-success rounded-circle p-3'>30</button>
                    <button onClick={(e) => handleChange(e)} className='btn btn-success rounded-circle p-3'>40</button>
                </div>
            </div>

            <div className='mb-5'>
                <h5>Exercise Details</h5>
                <div className='d-flex justify-content-between bg-light p-3 rounded my-3'>
                    <h5>Exercise Time</h5>
                    <p>{props.time}s</p>
                </div>
                <div className='d-flex justify-content-between bg-light p-3 my-3 rounded'>
                    <h5>Break Time</h5>
                    <p>{breaks}s</p>
                </div>
            </div>

            <div className='d-grid text-center'>
                <button type="button" class="btn btn-primary" id="liveToastBtn">Activity Completed</button>
            </div>
            <div class="toast-container position-fixed top-0 end-0 p-3">
                <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">

                        <strong class="me-auto">Super Active Zone App</strong>
                        <small></small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Congratulations !!  Task completed.
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Info;