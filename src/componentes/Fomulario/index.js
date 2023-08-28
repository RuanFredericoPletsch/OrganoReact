import './Formulario.css'
import FormularioCampoTexto from './../FormularioCampoTexto/index';
import ListaSuspensa from '../FormularioListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {
    
    const times = [
        'Builder',
        'Explorer',
        'Farms',
        'Redstone',
        'Noob'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('') 
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador:</h2>
                <FormularioCampoTexto
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do jogador"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <FormularioCampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <FormularioCampoTexto 
                    obrigatorio={false} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario