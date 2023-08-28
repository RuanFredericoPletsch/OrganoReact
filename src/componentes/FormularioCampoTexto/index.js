import { useState } from 'react'
import './FormularioCampoTexto.css'

const FormularioCampoTexto = (props) => {
    
    const placeholderModificiada = `${props.placeholder}...`

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="formulario-campo-texto">
            <label> {props.label} </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificiada}/>
        </div>
    )
}

export default FormularioCampoTexto