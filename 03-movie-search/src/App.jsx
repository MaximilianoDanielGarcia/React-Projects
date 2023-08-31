import './App.css'
import { MoviesResult } from './components/movies';
import { useMovies } from './hooks/use-movies';
import { useEffect } from 'react';
import { useSearch } from './hooks/use-search';
import { useState } from 'react';
import debounce from 'just-debounce-it';
import { useCallback } from 'react';

function App() {

  const [sort, setSort] = useState(false);
  const {search, updateSearch, error} = useSearch();
  const { movies, getMovies } = useMovies({ search, sort });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
     debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  }

  const handleSort = () => {
    setSort(!sort);
  }

  const handleChange = (event) => {
      const newQuery = event.target.value;
      if(newQuery.startsWith(' ')) return;

      updateSearch(newQuery);
      debouncedGetMovies(newQuery);
  }

  useEffect(() => {

    

  }, [search])
 
  return (
    <>
      <header>
        <h1>Blockbusters</h1>
        <form style={{display:'flex'}} onSubmit={handleSubmit}>
          <input onChange={handleChange} 
                 value={search} 
                 type="text" 
                 name='search'
                 placeholder='Avengers, Star Wars...'/>
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
      </header> 
      <main>
        { error && <p style={{color: 'red'}}>{error}</p> }
          <MoviesResult movies={movies}></MoviesResult> 
      </main>
    </>
  )
}

export default App
