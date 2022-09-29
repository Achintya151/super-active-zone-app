import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import Exercises from '../Exercises/Exercises';


const Sidebar = () => {
    const [exercises, setExercises] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const addToTime = (exercises) => {
        const newTime = time + parseInt(exercises);
        setTime(newTime);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9 col-12 order-lg-first order-last'>
                    <div className='d-flex flex-wrap justify-content-evenly'>
                        {
                            exercises.map(exercise => <Exercises
                                key={exercise._id}
                                name={exercise.name}
                                picture={exercise.picture}
                                time={exercise.time}
                                addToTime={addToTime}
                            ></Exercises>)
                        }
                    </div>
                </div>
                <div className='col-md order-lg-last order-first mt-lg-2 my-5 bg-light'>
                    <Info
                        time={time}
                    ></Info>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;