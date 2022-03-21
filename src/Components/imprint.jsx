import { Link } from 'react-router-dom'
import Footer from "./footer";

const Imprint = () => {
    return (
        <div>
            <header>
                <h1><Link to={-1}><b>.</b>MOV </Link></h1>
            </header>


            <main>
                <section className="imPrint">
                    <img src="../img/imprint_monochrome.png" alt="Die Crew" className="desktop"></img>
                    <img src="../img/mobile_imprint_color.png" alt="Die Crew" className="smartphone"></img>

                    <article className="superhelden">
                        <div className="headLine">Alias</div>
                        <div className="headLine">Name</div>
                        <div className="headLine">Hero Skills</div>

                        <div className="heldName">Batman</div>
                        <div className="heldID">Monika</div>
                        <div className="heldSkills">Carefully monitors an abundance of coding events with eager endevour to reflect programming excellency shown by the team mates. Need for text finishing?</div>

                        <div className="heldName">Aquaman</div>
                        <div className="heldID">Claus formerly known as Frank</div>
                        <div className="heldSkills">Geniunly masters all fetches, returns, unavailable results and mappings you can think of - to name but a few. No hook available? No problem, he will craft his own custom solutions.
                        </div>

                        <div className="heldName">Flash</div>
                        <div className="heldID">Guido</div>
                        <div className="heldSkills">Matches any possible scaling of rendered output of all display devices you can ever imagine, smoothly mastering on top designs to accommodate all possible platforms. Looking for hidden gems? No problem with the commander in chief of invisible values and easter eggs.
                        </div>


                    </article>
                    <article className="technik">
                        <h2>Applied Tools and Techniques</h2>
                        <div className="toolListe">
                            <div><img src="../img/logo-googlemeet.png" alt="googlemeet"></img></div>
                            <div><img src="../img/logo-figma.png" alt="figma"></img></div>
                            <div><img src="../img/logo-html.png" alt="html"></img></div>
                            <div><img src="../img/logo-css.png" alt="css"></img></div>
                            <div><img src="../img/logo-js.png" alt="js"></img></div>
                            <div><img src="../img/logo-sass.png" alt="sass"></img></div>
                            <div><img src="../img/logo-api.png" alt="api"></img></div>
                            <div><img src="../img/logo-tmdb.png" alt="tmdb"></img></div>
                            <div><img src="../img/logo-github.png" alt="github"></img></div>
                            <div><img src="../img/logo-react.png" alt="react"></img></div>
                            <div><img src="../img/logo-vscode.png" alt="vscode"></img></div>
                            <div><img src="../img/logo-miro.png" alt="miro"></img></div>
                            <div><img src="../img/logo-netlify.png" alt="netlify"></img></div>
                            <div><img src="../img/logo-discord.png" alt="discord"></img></div>
                            <div><img src="../img/logo-dafont.png" alt="discord"></img></div>
                            <div><img src="../img/logo-gimp.png" alt="gimp"></img></div>
                        </div>
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

export default Imprint;