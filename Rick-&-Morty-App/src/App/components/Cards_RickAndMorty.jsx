import { Card_RickAndMorty } from './Card_RickAndMorty';

export const Cards_RickAndMorty = ({ results, setOneCharacter }) => {
  return (
    <div className='cards'>
        {
            results.map(( character, index ) => (
                <Card_RickAndMorty 
                  key={ character.id } 
                  character={ character } 
                  setOneCharacter={ setOneCharacter }
                  index={ index }  
                />
            ))
        }
    </div>
  )
}
