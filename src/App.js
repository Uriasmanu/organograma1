import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label = 'nome' placeholder="Digite o seu nome" />
      <CampoTexto label = 'cargo' placeholder="Digite o seu cargo" />
      <CampoTexto label = 'imagem' placeholder="Insira a sua imagem" />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello wolrd
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
