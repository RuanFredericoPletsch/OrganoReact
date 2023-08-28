import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Fomulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorCadastrado}/>
    </div>
  );
}

export default App;
