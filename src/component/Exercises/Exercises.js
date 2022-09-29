import React from 'react';
const Exercises = (props) => {
    return (
        <div className='my-3'>
            <div className='card' style={{ width: "18rem" }}>
                <img src={props.picture} className='card-img-top' style={{ height: "180px" }} alt="profile" />
                <div className='card-body'>
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">Don't forget to take some rest in-between.</p>
                    <h6>For Age: 20-25</h6>
                    <h6>Time required: {props.time}s</h6>
                    <div className='d-grid text-center my-3'>
                        <button onClick={() => props.addToTime(props.time)} className='btn btn-primary'>Add To List</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Exercises;