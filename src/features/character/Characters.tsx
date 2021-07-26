import React, {useState} from 'react'
import { Character } from './Character'
import { useGetCharacterByIdQuery, useGetCharacterByNameQuery } from './characterSlice'
import './Characters.css';

export default function Characters () {
    // const { data } = useGetCharacterByIdQuery(1)
    const [state, setstate] = useState('')
    const { data, error, isLoading, isSuccess, isError } = useGetCharacterByNameQuery(state)
    let inputVal
    const getCharacter = (e: any) => {
        e.preventDefault();
        inputVal = e.target.elements.findChar.value
        console.log(inputVal)
        setstate(inputVal)
        
    }
    return (
        <div style={{padding: '2em'}}>
            <form onSubmit={getCharacter}>
                <input type='text' name='findChar' placeholder='Enter Character Name'/>
            </form>
            {console.log(data)}
            <div className='wrapper'>
           {isLoading && 'Loading...'}
           {isError && error}
                {isSuccess && data && data?.results.map(user => <
                    Character name={user.name}
                    image={user.image}
                    species={user.species}
                    gender={user.gender}
                />)}
            </div>
            
      </div>
    );
}
