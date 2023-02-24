import logo from '../../assets/logo.png';
import moon from '../../assets/moon.png';
import behance from '../../assets/behance.png';
import dribble from '../../assets/dribble.png';
import facebook from '../../assets/facebook.png';
import google_plus from '../../assets/google-plus.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';

import './Header_Footer.css'

function Header_Footer () {
    return (
        <div className='Header_Footer'>
            <header className='topo'>
                <img src={ logo }></img>
                <button>
                    <img src={ moon }></img>
                </button>
            </header>
            <footer>
                <img src={ logo }></img>
                <p>
                    Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.
                </p>
                <div>
                    <img src={ facebook }></img>
                    <img src={ twitter }></img>
                    <img src={ linkedin }></img>
                    <img src={ dribble }></img>
                    <img src={ behance }></img>
                    <img src={ google_plus }></img>
                </div>
                <p>Copyright 2022 © <span>Erick_GBDS</span></p>
            </footer>
        </div>
    )
}

export default Header_Footer;