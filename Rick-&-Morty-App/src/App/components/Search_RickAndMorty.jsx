import { useState } from 'react';

export const Search_RickAndMorty = () => {

  const [search, setSearch] = useState('');

  const onInputChange = ({ target }) => {
    const { value } = target;
    setSearch( value );
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (search.trim().length <= 1) return;
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
