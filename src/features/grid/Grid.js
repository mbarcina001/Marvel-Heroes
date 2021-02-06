import { useEffect, useState } from 'react';
import Paginator from '../paginator/Paginator'
import './Grid.scss';

import Thumbnail from 'shared/thumbnail/Thumbnail';

export default function Landpage() {
    const [ characterList, setCharacterList ] = useState([]);

    useEffect(() => {
        fetch("http://gateway.marvel.com/v1/public/characters?apikey=5aa2c0e77f889786c7da67172ceb8a0c&hash=aad01e90cda078d91f314188521cd3da&ts=1")
            .then(response => response.json())
            .then(response => {
                setCharacterList(response.data.results);
            });
    }, []);
    
    return (
        <div>
            <div className="landpage row">
                {characterList.map(character => (
                    <div className="col-4" key={character.id}>
                        <Thumbnail key={character.id} name={character.name} img={character.thumbnail.path + '.' + character.thumbnail.extension} />
                    </div>
                ))}
            </div>

            <Paginator />
        </div>
    )
}
