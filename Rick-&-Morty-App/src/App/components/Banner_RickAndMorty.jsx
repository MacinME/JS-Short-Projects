// Import assets
import { useEffect, useState } from 'react';
import { Cards_RickAndMorty } from './Cards_RickAndMorty';
import { Pagination_RickAndMorty } from './Pagination_RickAndMorty';
import { Search_RickAndMorty } from './Search_RickAndMorty';
import { CharacterInfo_RickAndMorty } from './CharacterInfo_RickAndMorty';

export const Banner_RickAndMorty = () => {

  const [data, setData] = useState(null);
  const [oneCharacter, setOneCharacter] = useState({
    id: null,
    character: null,
    status: false
  });

  const { results, info } = !!data && data;

  let url = 'https://rickandmortyapi.com/api/character/';

  const onFetchAPI = async(url) => {
      const resp = await fetch(url);
      const data = await resp.json();
      
      setData( data );
  }

  const onNextCharacter = (id) => {
    results.filter( (character, index) => {
      if(index + 1 === id){
        setOneCharacter( {
          id,
          character,
          status: true
        })
      }
    });
  }

  const onPrevCharacter = (id) => {
    results.filter( (character, index) => {
      if( index + 1 === id){
        setOneCharacter({
          id,
          character,
          status: true
        })
      }
    });
  }

  useEffect(() => {
      onFetchAPI(url);
  }, [])

  return (
    <div className="banner">
        <div className='banner-main'>
            <div className='layer'></div>
        </div>
        <div className="main">
          {/* Input component */}
          <Search_RickAndMorty />

          {
            results 
              ?
                <>
                  {/* Pagination Element */}
                  <Pagination_RickAndMorty results={ results } info={ info } onFetchAPI={ onFetchAPI } />

                  {/* Cards component */}
                  <Cards_RickAndMorty results={ results  } setOneCharacter={ setOneCharacter } />
                </>    

              : <h1>Loading...</h1>
          }

          {/* Render one card */}
          {
            oneCharacter.status && (
              <CharacterInfo_RickAndMorty 
                oneCharacter={ oneCharacter } 
                setOneCharacter={ setOneCharacter } 
                onNextCharacter={ onNextCharacter }
                onPrevCharacter={ onPrevCharacter }
              />
            )
          }
        </div>
    </div>
  )
}
