
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PlacerHolderImage from '../assets/images/pagenotfound.png';
import { Button } from '../components/Button';

export const MovieDetail = () => {
    //logica
    //recogida de parametros
    const params = useParams();
    const [movie, setMovie] = useState({});
    const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: PlacerHolderImage;

    useEffect(() => {
        async function fetchMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`);
            const json = await response.json()
            setMovie(json);
        }
        fetchMovie();
    }, [])

    return (
        <main>
            <section className="flex justify-around flex-wrap py-5">
                <div className="max-w-sm">
                    <img className="rounded" src={image} alt={movie.title} />
                </div>
                <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
                    <h2 className="text-4xl font-bold my-3 text-center lg:text-left">{ movie.title }</h2>
                    <p className="my-4"></p>
                    {
                        movie.genres ? (
                            <p className="my-7 flex flex-wrap gap-2">
                                { 
                                    movie.genres.map(genre => (
                                        <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>{genre.name}</span>
                                    )) 
                                }
                            </p>
                        ) : ""
                    }
                    <div className="flex  flex-col">
                        <p className="pt-2 pb-2 text-gray-900 dark:text-white">{ movie.overview}</p>
                        <p className="text-gray-900 dark:text-white">{ movie.release_date} Fecha de salida</p>
                        <p className="text-gray-900 dark:text-white">{ movie.vote_average} Voto Medio</p>
                        <p className="text-gray-900 dark:text-white">{ movie.vote_count } Votos</p>
                        <p className="text-gray-900 dark:text-white">{ movie.popularity} Popularidad</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-900 dark:text-white">{ movie.origin_country} Pais Originario</p>
                        {/* <p className="ml-2 text-gray-900 dark:text-white">{ movie.spoken_languages.english_name } Idiomas hablados</p> */}
                    </div>
                    <div className="flex justify-center my-4">
                        <Link to="/">
                            <Button>
                                Volver al inicio
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}