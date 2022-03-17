
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
    let trailerKey = "";

    return (
        <div className="movie">

            <header>
                <h1><Link to={-1}><b>.</b>MOV</Link></h1>
                <div className="searchbar">
                    {/* <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" onKeyPress={(e) => e.key === 'Enter' && handleSearch(e.target.value)} /> */}
                </div>
            </header>

            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {movie && (

                <main>
                    <section>
                        <article>
                            <h2>{movie.title}</h2>

                            <div className="details" key={movie.id}>

                                <div className="poster">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="bild" />
                                </div>

                                <div className="infos">

                                    <div class="hlDetails">Release Date</div>
                                    <div class="infoDetails">{movie.release_date}</div>

                                    {movie.genres.map((genreName) => {
                                        genreString += genreName.name + ", ";
                                    })}

                                    <div class="hlDetails">Genres</div>
                                    <div class="infoDetails">{(genreString.substring(0, genreString.length - 2))}</div>

                                    <div class="hlDetails">Overview</div>
                                    <div class="infoDetails">{movie.overview}</div>

                                    <div class="hlDetails">Average Voting</div>
                                    <div class="infoDetails">{movie.vote_average}</div>

                                    <div className="trailer">
                                        <p>Watch Trailer</p>
                                        {trailer && (
                                            trailer.results.map((element, i) => {
                                                {
                                                    i === 0 && (
                                                        trailerKey = element.key
                                                    )
                                                }
                                            })
                                        )}

                                        <iframe src={`https://www.youtube.com/embed/${trailerKey}`} title=".MOV Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </main>
            )
            }
            <footer>
                <article>
                    <div className="block">
                        <div className="links"><Link to={-1}><b>.</b>MOV</Link></div>
                        <div className="imprint"><a href="assets/pages/imprint.html">Imprint</a></div>
                    </div>
                    <div className="mitte">
                        <div>
                            <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-square"></i></a>
                        </div>
                    </div>
                    <div className="rechts">
                        <a href="https://de.wikipedia.org/wiki/Make_love,_not_war#/media/Datei:Love_war_(6405241535).jpg"
                            target="_blank">
                            <p><i className="fa-solid fa-heart"></i> MAKE LOVE</p>
                            <p>NOT WAR <i className="fa-solid fa-peace"></i></p>
                        </a>
                    </div>
                </article>
            </footer>
            <div className="urheber">
                <p>&copy; 2022 by Justice League</p>
                <p>Created with Love <i className="fa-solid fa-heart"></i>
                </p>
                <p><i className="fa-solid fa-carrot"></i> 1oo% vegan</p>
            </div>
        </div >
    );
}

export default MovieDetail;


{/* <Link className="btn-back" to={-1}>
                        <img className="logo" src="logo.svg" alt="bild" />
                    </Link> */}