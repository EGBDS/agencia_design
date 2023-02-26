import './Card.css';
import Header_Footer from '../Header_Footer/Header_Footer';


function Card ( props ) {
    return (
        <div className='card'>
            <div className='data'>
                {props.mes} {props.data_inicio} - {props.data_fim} <br /><h2>{props.cargo} </h2> {props.empresa} <br />{props.funcao}
            </div>
        </div>
    )
}

export default Card;