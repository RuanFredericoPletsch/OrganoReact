//Importar CSS
import './Time.css'

//Iniciar arrow function
const Time = (props) => {
    return(
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )
}

//Export padrão dos dados
export default Time