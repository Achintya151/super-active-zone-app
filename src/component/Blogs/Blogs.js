import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowRight, faDumbbell } from '@fortawesome/free-solid-svg-icons'
const Blogs = () => {
    return (
        <div className='container'>
            <div className='text-center py-5'>
                <h1>Question & Answer</h1>
            </div>
            <div>
                <h4>How does React work?</h4>
                <div>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    <p>ans</p>
                </div>
            </div>
            <div>
                <h4>Difference between Props & State?</h4>
                <div>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    <p>ans</p>
                </div>
            </div>
            <div>
                <h4>Use of UseEffect other than API data load?</h4>
                <div>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    <p>ans</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;