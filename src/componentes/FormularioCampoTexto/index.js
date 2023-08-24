import './FormularioCampoTexto.css'

const FormularioCampoTexto = (props) => {
    
    const placeholderModificiada = `${props.placeholder}...`

    return (
        <div className="formulario-campo-texto">
            <label> {props.label} </label>
            <input placeholder={placeholderModificiada}/>
        </div>
    )
}

export default FormularioCampoTexto