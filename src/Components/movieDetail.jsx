
import { useParams, Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import useLocal from "./useLocal";
import db_genre from '../Data/db_genre.json'
import db_trailer from '../Data/db_trailer.json'

const MovieDetail = () => {

    const { id } = useParams();
    const { data: movie, error, isPending } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b48ee67edfa90490c5c00809b96d895b&language=de-DE`)


    const { data: trailer, errorTrailer, isPendingTrailer } = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b48ee67edfa90490c5c00809b96d895b&language=de-DE`)


    let genreString = "";

    return (

        <div className="movie">

            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {movie && (

                <div className="movie-container" key={movie.id}>

                    <div className="movie-image">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="bild" />
                    </div>
                    <div className="movie-discription">
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>

                        {movie.genres.map((genreName) => {
                            genreString += genreName.name + ", ";
                        })}

                        <p>{(genreString.substring(0, genreString.length - 2))}</p>
                        <p>{movie.overview}</p>
                        <p>{movie.vote_average}</p>
                    </div>

                    <div className="movie-trailer">

                        {trailer && (
                            trailer.results.map((element, i) => {
                                {
                                    i === 0 &&
                                        console.log(element.name);
                                    console.log(element.key);
                                    console.log(element.site);
                                }

                                // <iframe src="https://www.youtube.com/embed/X5ibkB5ftH0" width={1000} height={500} title={`${element.name}`}></iframe>
                            })
                        )}



                        <iframe src="https://www.youtube.com/embed/X5ibkB5ftH0" width={1000} height={500} title={`hier kommt Name`}></iframe>
                    </div>

                    <Link className="btn-back" to={-1}>
                        <img className="logo" src="logo.svg" alt="bild" />
                    </Link>
                </div>
            )




            }
            {/* <Nav /> */}
        </div >
    );
}

export default MovieDetail;