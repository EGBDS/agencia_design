import './Card.css';

function Card ( props ) {
    return (
        <div className='card'>
            <div className='data'>
                {props.mes} {props.data_inicio} - {props.data_fim}
            </div>
            <div className='txt_card'>
                {props.cargo}
                {props.empresa} <br />
                {props.funcao}
            </div>
        </div>
    )
}

export default Card;