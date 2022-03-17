import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div>
            <footer>
                <article>
                    <div className="block">
                        <div className="links"><Link to={-1}><b>.</b>MOV</Link></div>
                        <div className="imprint"><a href="assets/pages/imprint.html">Imprint</a></div>
                    </div>
                    <div className="mitte">
                        <div>
                            <a href="https://www.instagram.com/" target="_blank" rel='noopener'><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/" target="_blank" rel='noopener'><i className="fa-brands fa-facebook-square"></i></a>
                        </div>
                    </div>
                    <div className="rechts">
                        <a href="https://de.wikipedia.org/wiki/Make_love,_not_war#/media/Datei:Love_war_(6405241535).jpg"
                            target="_blank" rel='noopener'>
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
        </div>
    )
}

export default Footer;