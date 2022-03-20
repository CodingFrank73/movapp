
import { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import Footer from './footer';
import MovieList from './movieList';


const Home = () => {

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

    const handlePageUp = (fNumber) => {

        switch (fNumber) {
            case 1:
                setPageDefault((initial) => {
                    return initial + 1;
                })
                break;
            case 2:
                setPageSearch((initial) => {
                    return initial + 1;
                })
                break;
            case 3:
                setPageCheck((initial) => {
                    return initial + 1;
                })
                break;
            default:
                break;
        }
    }

    const handlePageDown = (fNumber) => {

        switch (fNumber) {
            case 1:
                setPageDefault((initial) => {
                    return initial - 1;
                })
                break;
            case 2:
                setPageSearch((initial) => {
                    return initial - 1;
                })
                break;
            case 3:
                setPageCheck((initial) => {
                    return initial - 1;
                })
                break;
            default:
                break;
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

    useEffect(() => {
        const cleanUp = new AbortController();

        searchValue && (
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
        )

        return () => cleanUp.abort();

    }, [searchValue, pageSearch]);


    useEffect(() => {
        // console.log(valueArr)
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
                    setMovies(json.results)
                    setIsPending(false);
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
                <h1> <Link to="/"><b>.</b>MOV</Link></h1>
                <div className="searchbar">
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" placeholder='search something here' onKeyPress={(e) => e.key === 'Enter' && setSearchValue(e.target.value)} />
                </div>

                <Collapsible trigger="q">
                    <ul>
                        <li>
                            <label htmlFor=""><input type="checkbox" value={28} onChange={(e) => isChecked(e.target)} /> Action</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" value={16} onChange={(e) => isChecked(e.target)} /> Animation</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" value={18} onChange={(e) => isChecked(e.target)} /> Drama</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" value={10751} onChange={(e) => isChecked(e.target)} /> Family</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" value={14} onChange={(e) => isChecked(e.target)} /> Fantasy</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" value={27} onChange={(e) => isChecked(e.target)} /> Horror</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" value={10402} onChange={(e) => isChecked(e.target)} /> Music</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" value={10749} onChange={(e) => isChecked(e.target)} /> Romance</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" value={878} onChange={(e) => isChecked(e.target)} /> Science Fiction</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" value={53} onChange={(e) => isChecked(e.target)} /> Thriller</label>
                        </li>
                        <li>
                            <label htmlFor=""><input type="checkbox" value={37} onChange={(e) => isChecked(e.target)} /> Western</label>
                        </li>
                    </ul>
                </Collapsible>


            </header>

            {error && <div>{error}</div>}
            {isPending && <div>Data loading...</div>}
            {movies && <MovieList movies={movies} fetchNumber={fetchNumber} handlePageUp={handlePageUp} handlePageDown={handlePageDown} />}

            <Footer />
        </div >
    );
}

export default Home;
