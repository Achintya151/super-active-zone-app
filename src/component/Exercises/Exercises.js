import React from 'react';
import profile from '../../images/Photo less than 50kb.jpg'
const Exercises = () => {
    return (
        <div>
            <div className='card' style={{ width: "18rem" }}>
                <img src={profile} className='card-img-top' alt="profile" />
                <div className='card-body'>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-primary'>Go somewhere</button>
                </div>
            </div>
        </div >
    );
};

export default Exercises;