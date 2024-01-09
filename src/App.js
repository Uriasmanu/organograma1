import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#12365',
      corSecundaria:'#652434'
    },
    {
      nome:'Programação',
      corPrimaria:'',
      corSecundaria:''
    },
    {
      nome:'Programação',
      corPrimaria:'',
      corSecundaria:''
    },
    {
      nome:'Programação',
      corPrimaria:'',
      corSecundaria:''
    },
    {
      nome:'Programação',
      corPrimaria:'',
      corSecundaria:''
    },
    {
      nome:'Programação',
      corPrimaria:'',
      corSecundaria:''
    },
    {
      nome:'Programação',
      corPrimaria:'',
      corSecundaria:''
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map (time => <Time key={time.nome} nome={time.nome} corDoFundo={time.corPrimaria} corSecundaria={time.corSecundaria} />)}

    </div>
  );
}

export default App;
