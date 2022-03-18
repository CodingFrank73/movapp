
import { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import db_genre from '../Data/db_genre.json'
import Footer from './footer';


const Home = () => {

    const [genreArr] = useState(db_genre.genres);
    const [movies, setMovies] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [valueArr, setValueArr] = useState([])
    const [genreId, setGenreId] = useState("")
    const [defaultScreen, setDefaultScreen] = useState(false)

    const [fetchNumber, setFetchNumber] = useState(1);
    const [searchValue, setSearchValue] = useState("");

    const [pageDefault, setPageDefault] = useState(1)
    const [pageSearch, setPageSearch] = useState(1)
    const [pageCheck, setPageCheck] = useState(1)

    function inc(fetch) {
        if (fetch === 1) {
            setPageDefault((initial) => {
                return initial + 1;
            })
        } else if (fetch === 2) {
            setPageSearch((initial) => {
                return initial + 1;
            })
            handleSearch(searchValue)
        } else {
            setPageCheck((initial) => {
                return initial + 1;
            })
        }
    }

    function dec(fetch) {
        if (fetch === 1) {
            setPageDefault((initial) => {
                return initial - 1;
            })
        } else if (fetch === 2) {
            setPageSearch((initial) => {
                return initial - 1;
            })
            handleSearch(searchValue)
        } else {
            setPageCheck((initial) => {
                return initial - 1;
            })
        }
    }


    useEffect(() => {
        const cleanUp = new AbortController();

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b48ee67edfa90490c5c00809b96d895b&language=de_DE&page=${pageDefault}`, { signal: cleanUp.signal })

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
                setFetchNumber(1)
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

    }, [defaultScreen, pageDefault]);


    const handleSearch = (e) => {

        setSearchValue(e)

        const cleanUp = new AbortController();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b48ee67edfa90490c5c00809b96d895b&language=de-DE&query=${searchValue}&page=${pageSearch}&include_adult=false`, { signal: cleanUp.signal })

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
                setFetchNumber(2)
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
            valueArr.splice(valueArr.indexOf(e.value, 0), 1)
            setGenreId(valueArr.join())

            //Wenn keine Checkbox ausgewählt ist, lade Startseite erneut
            if (valueArr.length === 0) { setDefaultScreen(true) }
        }
    }

    useEffect(() => {
        const cleanUp = new AbortController();

        genreId && (
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b48ee67edfa90490c5c00809b96d895b&language=de-DE&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageCheck}&primary_release_year=2018&with_genres=${genreId}&with_watch_monetization_types=flatrate`, { signal: cleanUp.signal })

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
                    setFetchNumber(3)
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

        return () => cleanUp.abort();

    }, [genreId, pageCheck]);

    return (
        <div className="movieList">

            <header>
                <h1> <Link to={-1}><b>.</b>MOV</Link></h1>
                <div className="searchbar">
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" placeholder='search something here' onKeyPress={(e) => e.key === 'Enter' && handleSearch(e.target.value)} />
                </div>
                <div>
                    <button onClick={() => fetchNumber === 1 ? inc(1) : fetchNumber === 2 ? inc(2) : inc(3)}> +1</button>
                    <button onClick={() => fetchNumber === 1 ? dec(1) : fetchNumber === 2 ? dec(2) : dec(3)}> -1</button>
                </div>

                <Collapsible trigger="q">
                    <ul>
                        <li>
                            <label htmlFor=""><input type="checkbox" name="" id="" value={28} onChange={(e) => isChecked(e.target)} /> Action</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" name="" id="" value={18} onChange={(e) => isChecked(e.target)} /> Drama</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" name="" id="" value={10402} onChange={(e) => isChecked(e.target)} /> Music</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" name="" id="" value={10751} onChange={(e) => isChecked(e.target)} /> Family</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" name="" id="" value={37} onChange={(e) => isChecked(e.target)} /> Western</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" name="" id="" value={878} onChange={(e) => isChecked(e.target)} /> Science Fiction</label></li>
                        <li>
                            <label htmlFor=""><input type="checkbox" name="" id="" value={27} onChange={(e) => isChecked(e.target)} /> Horror</label></li>
                    </ul>
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
                                            <Link to={`moviedetail/${item.id}`}>
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
                    </article>
                </section>
            </main>
            <Footer />
        </div >
    );
}

export default Home;
