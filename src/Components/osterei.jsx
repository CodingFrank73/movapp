import { Link } from 'react-router-dom'
import Footer from "./footer";

const Osterei = () => {

    return (
        <div>
            <header>
                <h1><Link to={-1}><b>.</b>MOV </Link></h1>
            </header>


            <main>
                <section className="imPrint">
                    <img src="../img/osterei.png" alt="osterei" className="desktop"></img>
                    <img src="../img/mobile-osterei.png" alt="Die Crew" className="smartphone"></img>

                    <article className="superhelden">



                    </article>

                </section>
            </main>

            <Footer />
            {/* <footer>
                <article>
                    <div className="block">
                        <div className="links"><a href="../../index.html"><b>.</b>MOV</a></div>
                        <div className="imprint"><a href="imprint.html">Imprint</a></div>
                    </div>
                    <div className="mitte">
                        <div>
                            <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/" target="_blank"><i
                                className="fa-brands fa-facebook-square"></i></a>
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
            </div> */}


            {/* <script src="https://kit.fontawesome.com/8c93758a75.js" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossorigin="anonymous"></script> */}
        </div>
    );
}

export default Osterei;