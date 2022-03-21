import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Footer from "./footer";


const Imprint = () => {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        scrollToTop()
    })

    return (
        <div>
            <header>
                <h1><Link to="/"><b>.</b>MOV </Link></h1>
            </header>


            <main>
                <section className="imPrint">
                    <img src="../img/imprint_monochrome.png" alt="Die Crew" className="desktop"></img>
                    <img src="../img/mobile_imprint_color.png" alt="Die Crew" className="smartphone"></img>

                    <article className="superhelden">
                        <div className="headLine">Name</div>
                        <div className="headLine">Identität</div>
                        <div className="headLine">Superkraft</div>

                        <div className="heldName">Batman</div>
                        <div className="heldID">Monika</div>
                        <div></div>


                        <div className="heldName">Aquaman</div>
                        <div className="heldID">Claus formerly known as Frank</div>
                        <div></div>


                        <div className="heldName">Flash</div>
                        <div className="heldID">Guido</div>
                        <div></div>


                    </article>
                    <article className="technik">
                        <h2>Eingesetzte Werkzeuge und Technologien</h2>
                        <div className="toolListe">
                            <div><img src="../img/logo-html.png" alt="html"></img></div>
                            <div><img src="../img/logo-css.png" alt="css"></img></div>
                            <div><img src="../img/logo-js.png" alt="js"></img></div>
                            <div><img src="../img/logo-sass.png" alt="sass"></img></div>
                            <div><img src="../img/logo-api.png" alt="api"></img></div>
                            <div><img src="../img/logo-github.png" alt="github"></img></div>
                            <div><img src="../img/logo-react.png" alt="react"></img></div>


                            <div><img src="../img/logo-vscode.png" alt="vscode"></img></div>
                            <div><img src="../img/logo-miro.png" alt="miro"></img></div>
                            <div><img src="../img/logo-googlemeet.png" alt="googlemeet"></img></div>
                            <div><img src="../img/logo-netlify.png" alt="netlify"></img></div>


                            <div className="figma"><img src="../img/logo-figma.png" alt="figma"></img></div>
                            <div><img src="../img/logo-discord.png" alt="discord"></img></div>
                            <div><img src="../img/logo-gimp.png" alt="gimp"></img></div>
                        </div>
                    </article>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Imprint;