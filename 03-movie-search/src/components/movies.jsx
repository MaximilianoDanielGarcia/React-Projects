import './movies.css'
/* eslint-disable react/prop-types */
export function MoviesResult ({ movies }) {

    const hasMovies = movies?.length > 0;

    return (
        hasMovies ? (
        <ul className="movies">
            { movies.map(movie => (
            <li className="movie" key={movie.id}>
                <h3>{movie.title} ({movie.year})</h3>
                
                <img src={movie.poster} alt={movie.title} />
            </li>
            ))}
        </ul>
        ) :

        <p>No se encontraron resultados para tu búsqueda...</p>
    )
}