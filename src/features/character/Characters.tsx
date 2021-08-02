import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Character } from './Character'
import { useGetCharacterByIdQuery, useGetCharacterByNameQuery } from './characterSlice'
import './Characters.css';
import { Sidebar } from '../sidebar/Sidebar';
import { addCharacter } from '../sidebar/sidebarSlice';


export default function Characters() {
    const [state, setstate] = useState('')
    const { data, error, isLoading, isSuccess, isError } = useGetCharacterByNameQuery(state)

    let inputVal
    const getCharacter = (e: any) => {
        e.preventDefault();
        inputVal = e.target.elements.findChar.value
        console.log(inputVal)
        setstate(inputVal)
    }

    const dispatch = useDispatch
    // Trying to get this to work with sidebarslice
    // const addC = (id: number) => {
    //     dispatch(addCharacter())
    // }

    return (
        <div style={{ padding: '2em' }}>
            <span style={{ display: 'flex', fontSize: '.7em', justifyContent: 'space-between' }}>
                <form onSubmit={getCharacter}>
                    <input style={{ color: 'blue', background: '#F0FFFF', height: '100%', border: 'none' }} type='text' name='findChar' placeholder='Enter Character Name' />
                </form>
                <Sidebar />
            </span>
            <br />
            {console.log(data)}
            <div className='wrapper'>
                {isLoading && 'Loading...'}
                {isError && error}
                {isSuccess && data && data?.results.map(user =>
                    <Character
                        name={user.name}
                        image={user.image}
                        species={user.species}
                        gender={user.gender}
                        status={user.status}
                        location={user.location.name}
                    />
                )}
            </div>
        {/* <button onClick={() => }></button> */}
        </div>
    );
}
