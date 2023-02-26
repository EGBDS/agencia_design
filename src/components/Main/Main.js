import Card from '../Card/Card';
import banner from '../../assets/banner.png'
import './Main.css';

function Main (props) {
    return (
        <main className='main' style={{background:props.BackgroundColor, color:props.color}}>
            <div className='destaque'>
                <img src={ banner } className='img_banner'></img>
                <div className='txt_destaque'>
                    <p>BRANDING / UI / UX / TECNOLOGIA</p>
                    <h1>Agência de Branding <span className='destaque_txt'>e design digital</span></h1>
                </div>
            </div>
            <div className='experiencias' style={{background:props.BackgroundColor_Cards}}>
                <h2 className='titulo_card'>Experiências De Trabalho</h2>
                    <p className='txt_card'>
                        Há mais de 10 anos no meraco de Branding, Desing Gráfico, Criação de Sites e Market Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes
                    </p>
                <div className='cards'>
                    <Card
                        mes="JUNHO"
                        data_inicio="2012"
                        data_fim="2016"
                        cargo="Web Designer"
                        empresa="pied Piper StartUp." funcao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                    />
                    <Card
                        mes="AGOSTO"
                        data_inicio="2016"
                        data_fim="2019"
                        cargo="Product Designer"
                        empresa="E Corp."
                        funcao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra, mpactando-o no momento certo."
                    />
                    <Card
                        mes="FEVEREIRO"
                        data_inicio="2019"
                        data_fim="2021"
                        cargo="Digital Consulting"
                        empresa="Arakasa Inc."
                        funcao="Consultoria em estratégias degitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução do plnao de ação."
                    />
                </div>
            </div>
        </main>
    )
}

export default Main;