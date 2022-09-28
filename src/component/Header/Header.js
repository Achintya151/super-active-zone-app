import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <div className='text-start'>
            <div className='d-flex align-items-center'>
                <h1 className='me-4'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></h1>
                <h1>Super Active Zone</h1>
            </div>
            <h3>Select today’s exercise</h3>
        </div>
    );
};

export default Header;