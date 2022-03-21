import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import Footer from "./footer";

const Osterei = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        scrollToTop()
    })

    return (
        <div>
            <header>
                <h1><Link to={"/"}><b>.</b>MOV </Link></h1>
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

        </div>
    );
}

export default Osterei;