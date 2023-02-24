import logo from '../../assets/logo.png';
import moon from '../../assets/moon.png';
import behance from '../../assets/behance.png';
import dribble from '../../assets/dribble.png';
import facebook from '../../assets/facebook.png';
import google_plus from '../../assets/google-plus.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';

import './Header_Footer.css'
import Main from '../Main/Main';

function Header_Footer () {
    return (
        <div className='header_footer'>
            <header className='topo'>
                <img src={ logo } className='img_logo'></img>
                <img src={ moon } className='img_modo'></img>
            </header>
            
            <Main />

            <footer className='rodape'>
                <img src={ logo } className='img_logo_rodape'></img>
                <p>
                    Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.
                </p>
                <div className='tecnologias_img'>
                    <img src={ facebook }></img>
                    <img src={ twitter }></img>
                    <img src={ linkedin }></img>
                    <img src={ dribble }></img>
                    <img src={ behance }></img>
                    <img src={ google_plus }></img>
                </div>
                <p>Copyright 2022 © <strong className='name_desenvolvedor'>Erick_GBDS</strong></p>
            </footer>
        </div>
    )
}

export default Header_Footer;