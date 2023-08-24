import './Formulario.css'
import FormularioCampoTexto from './../FormularioCampoTexto/index';

const Formulario = () => {
    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do jogador:</h2>
                <FormularioCampoTexto label="Nome" placeholder="Digite o nome do jogador"/>
                <FormularioCampoTexto label="Cargo" placeholder="Digite o cargo"/>
                <FormularioCampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Formulario