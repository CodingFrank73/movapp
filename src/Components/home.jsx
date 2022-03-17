
import { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import db_genre from '../Data/db_genre.json'
import Header from './header';


const Home = () => {

    const [genreArr] = useState(db_genre.genres);
    const [movies, setMovies] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [valueArr, setValueArr] = useState([])
    const [genreId, setGenreId] = useState("")
    const [filter, setFilter] = useState(false)
    const [defaultScreen, setDefaultScreen] = useState(false)

    useEffect(() => {
        const cleanUp = new AbortController();

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b48ee67edfa90490c5c00809b96d895b&language=de_DE&page=1`, { signal: cleanUp.signal })

            .then(resp => {
                if (!resp.ok) {
                    throw Error('Daten können nicht geliefert werden...');
                }
                return resp.json();
            })
            .then(json => {
                setIsPending(false);
                setMovies(json.results)
                setError(null)
                console.log(json.results);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch abort');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        setDefaultScreen(false)
        return () => cleanUp.abort();

    }, [defaultScreen]);


    const handleSearch = (e) => {
        const cleanUp = new AbortController();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b48ee67edfa90490c5c00809b96d895b&language=en-US&query=${e}&page=1&include_adult=false`, { signal: cleanUp.signal })

            .then(resp => {
                if (!resp.ok) {
                    throw Error('Daten können nicht geliefert werden...');
                }
                return resp.json();
            })

            .then(json => {
                setIsPending(false);
                setMovies(json.results)
                setError(null)
                console.log(json.results);
            })

            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch abort');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

        return () => cleanUp.abort();
    }

    useEffect(() => {
        console.log(valueArr)
        setGenreId(valueArr.join())
    }, [valueArr]);

    const isChecked = (e) => {
        if (e.checked) {
            setValueArr(valueArr => [...valueArr, e.value])
        }
        else {
            let a = valueArr.splice(valueArr.indexOf(e.value, 0), 1)
            setGenreId(valueArr.join())

            //Wenn keine Checkbox ausgewählt ist, lade Startseite erneut
            if (valueArr.length === 0) { setDefaultScreen(true) }
        }

        setFilter(true)
    }

    useEffect(() => {
        const cleanUp = new AbortController();

        genreId && (
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b48ee67edfa90490c5c00809b96d895b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018&with_genres=${genreId}&with_watch_monetization_types=flatrate`, { signal: cleanUp.signal })

                .then(resp => {
                    if (!resp.ok) {
                        throw Error('Daten können nicht geliefert werden...');
                    }
                    return resp.json();
                })

                .then(json => {
                    setIsPending(false);
                    setMovies(json.results)
                    setError(null)
                })

                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch abort');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        )

        setFilter(false)
        return () => cleanUp.abort();

    }, [filter]);

    return (
        <div className="movieList">


            <header>
                <h1><a href="#"><b>.</b>MOV </a></h1>
                <div className="searchbar">
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" placeholder='search something here' onKeyPress={(e) => e.key === 'Enter' && handleSearch(e.target.value)} />
                </div>

                <Collapsible trigger="Filter by Genre">
                    <label htmlFor=""><input type="checkbox" name="" id="" value={28} onChange={(e) => isChecked(e.target)} />Action</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" value={18} onChange={(e) => isChecked(e.target)} />Drama</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" value={10402} onChange={(e) => isChecked(e.target)} />Music</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" value={10751} onChange={(e) => isChecked(e.target)} />Family</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" value={37} onChange={(e) => isChecked(e.target)} />Western</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" value={878} onChange={(e) => isChecked(e.target)} />Science Fiction</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" value={27} onChange={(e) => isChecked(e.target)} />Horror</label>
                </Collapsible>
            </header>

            <main>
                <section>
                    <article>
                        <h2>Popular movies</h2>
                        <div className="movList">

                            {isPending && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                            {movies && (
                                movies.map((item, i) => {

                                    let genreString = "";

                                    return (
                                        <figure id="popMov0" class="movPoster">
                                            <Link to={`moviedetail/${item.id}`}>
                                                <div class="movRating">{item.vote_average}</div>
                                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="bild" />
                                                <figcaption>
                                                    {item.genre_ids && (
                                                        item.genre_ids.map((genre) => {
                                                            let result
                                                            let arr
                                                            arr = genreArr.filter(res => res.id === genre)
                                                            arr[0] === undefined ? result = "Arthouse" : result = arr[0].name
                                                            genreString += result + ", "
                                                        }))}

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

                            {/* <Nav /> */}
                        </div>
                    </article>
                </section>
            </main>
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

export default Home;
