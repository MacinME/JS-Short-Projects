import { Card_RickAndMorty } from './Card_RickAndMorty';

export const Cards_RickAndMorty = ({ results }) => {
  return (
    <div className='cards'>
        {
            results.map(( character ) => (
                <Card_RickAndMorty key={ character.id } {...character}/>
            ))
        }
    </div>
  )
}
