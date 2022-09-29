import React from 'react';
const Exercises = (props) => {
    return (
        <div>
            <div className='card' style={{ width: "18rem" }}>
                <img src={props.picture} className='card-img-top' alt="profile" />
                <div className='card-body'>
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">Don't forget to take some rest in-between.</p>
                    <h6>For Age: 20-25</h6>
                    <h6>Time required: {props.time}s</h6>
                    <button className='btn btn-primary'>Add To List</button>
                </div>
            </div>
        </div >
    );
};

export default Exercises;