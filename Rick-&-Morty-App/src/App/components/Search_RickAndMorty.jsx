import { useState } from 'react';

export const Search_RickAndMorty = ({ onFetchAPI }) => {

  const [search, setSearch] = useState('');

  const onInputChange = ({ target }) => {
    const { value } = target;
    setSearch( value );
    
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (search.trim().length === 10 ) {
      onFetchAPI(`https://rickandmortyapi.com/api/character/`)
      return;
    };
    onFetchAPI(`https://rickandmortyapi.com/api/character/?name=${ search }`)
  }


  return (
    <form onSubmit={ onSubmitForm }>
      <div className='form'>
        <input 
              type="text" 
              className="search"
              placeholder="Rick & Morty characters"
              name="search"
              autoComplete="off"
              onChange={ onInputChange }
              value={ search }
          />
      </div>
    </form>
  )
}
