
import { Link } from "react-router-dom";
import { useState } from "react";
import db_genre from '../Data/db_genre.json'

const MovieList = ({ movies, fetchNumber, handlePageUp, handlePageDown }) => {
    const [genreArr] = useState(db_genre.genres);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <main>
            <section>
                <article>
                    <h2>Popular movies</h2>
                    <div className="movList">
                        {movies && (
                            movies.map((item, i) => {

                                let genreString = "";
                                let picString = "";

                                item.genre_ids && (
                                    item.genre_ids.map((genre) => {
                                        let arr = genreArr.filter(res => res.id === genre)
                                        arr[0] === undefined ? genreString += "Arthouse," : genreString += `${arr[0].name}, `
                                        return (genreString)
                                    }))

                                item.poster_path === null ? picString = "/img/not_avaible.png" : picString = `https://image.tmdb.org/t/p/w500${item.poster_path}`

                                return (
                                    <figure id="popMov0" className="movPoster">
                                        <Link to={`/moviedetail/${item.id}`}>
                                            <div className="movRating">{item.vote_average}</div>
                                            <img src={picString} alt="bild" />

                                            <figcaption>
                                                {item.release_date && (
                                                    <p>{item.release_date.slice(0, 4) + " - " + genreString.substring(0, genreString.length - 2)}</p>
                                                )}

                                                <h3>{item.title}</h3>
                                            </figcaption>
                                        </Link>
                                    </figure>
                                )
                            }))
                        }
                    </div>
                    <button onClick={() => [handlePageDown(fetchNumber), scrollToTop()]}><i className="fa-solid fa-square-minus"></i></button>
                    <button onClick={() => [handlePageUp(fetchNumber), scrollToTop()]} > <i className="fa-solid fa-square-plus"></i></button>
                </article>
            </section>
        </main >
    );
}

export default MovieList;