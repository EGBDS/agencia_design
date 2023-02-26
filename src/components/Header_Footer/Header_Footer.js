import logo from '../../assets/logo.png';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';
import behance from '../../assets/behance.png';
import dribble from '../../assets/dribble.png';
import facebook from '../../assets/facebook.png';
import google_plus from '../../assets/google-plus.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';

import './Header_Footer.css'
import Main from '../Main/Main';

import { useState } from 'react';

function Header_Footer () {

    const [ Modo, setModo ] = useState( moon );
    const [ TextColor, setTextColor ] = useState( "rgb(56, 56, 56)" );
    const [ Borda, setBorda ] = useState( " 1px solid black" );
    const [ BackgroundColor, setBackgroundColor ] = useState("white");
    const [ BackgroundColor_Cards, setBackgroundColor_Cards ] = useState("white")

    function Mudar() {
        
    
        if ( Modo === moon ){
            setModo( sun );
            setTextColor( "white" );
            setBorda(" 1px solid white");
            setBackgroundColor("rgb(56, 56, 56)");
            setBackgroundColor_Cards("gray")
        } else {
            setModo( moon );
            setTextColor( "black" );
            setBorda(" 1px solid black");
            setBackgroundColor("white");
            setBackgroundColor_Cards("white")
        }
    }
    


    return (
        <div className='header_footer' >
            <header className='topo' style={{background: BackgroundColor}}>
                <img src={ logo } className='img_logo'></img>
                <img 
                    src={ Modo } 
                    onClick={ Mudar } 
                    className='img_modo'
                    style={{border: Borda}}>
                </img>
            </header>
            
            <Main 
                BackgroundColor={BackgroundColor}
                BackgroundColor_Cards={BackgroundColor_Cards}
                color={TextColor}
            />

            <footer className='rodape' style={{color: TextColor, background: BackgroundColor}}>
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
                <p className='copyright'>
                    Copyright 2023 © 
                    <a href="https://github.com/EGBDS" target='_blank'>
                        Erick_GBDS
                    </a>
                </p>
            </footer>
        </div>
    )
}

export default Header_Footer;