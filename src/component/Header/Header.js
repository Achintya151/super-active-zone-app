import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Exercises from '../Exercises/Exercises';

const Header = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div className='text-start'>
            <div className='d-flex align-items-center'>
                <h1 className='me-4'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></h1>
                <h1>Super Active Zone</h1>
            </div>
            <h3>Select today’s exercise</h3>
            <div>
                {
                    exercises.map(exercise => <Exercises
                        key={exercise._id}
                        name={exercise.name}
                        picture={exercise.picture}
                        time={exercise.time}
                    ></Exercises>)
                }
            </div>
        </div>
    );
};

export default Header;