import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Fomulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Builder',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Farms',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Explorer',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Redstone',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Noob',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorCadastrado}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}

export default App;
