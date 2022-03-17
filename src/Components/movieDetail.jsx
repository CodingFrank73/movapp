
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import Footer from "./footer";

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
                                        genreString += genreName.name + ", "
                                        return
                                    })}

                                    <div class="hlDetails">Genres</div>
                                    <div class="infoDetails">{(genreString.substring(0, genreString.length - 2))}</div>

                                    <div class="hlDetails">Overview</div>
                                    <div class="infoDetails">{movie.overview}</div>

                                    <div class="hlDetails">Average Voting</div>
                                    <div class="infoDetails">{movie.vote_average}</div>

                                    <div className="trailer">
                                        <p>Watch Trailer</p>

                                        {isPendingTrailer && <div>Loading...</div>}
                                        {errorTrailer && <div>{error}</div>}
                                        {trailer && (
                                            trailer.results.map((element, i) => {
                                                i === 0 && (trailerKey = element.key)
                                                return
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

            <Footer />
        </div >
    );
}

export default MovieDetail;
