import logo from './imagem.jpg';
import './App.css';

const verNoticia = () => {
  return (
    alert('Notícias Urgentes...')
  )
}
const cardNoticias = () => {
  return (
    <article className='App-card'>
      <h5 className='card-titulo'>Título da Categoria</h5>
      <img src={logo} className='logotipo' alt='logo' />
      <h5>Título da notícia</h5>
      <p>Descrição da notícia</p>
      <button className='App-button' onClick={verNoticia}>Eu quero ler</button>
    </article>
  )
}

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <h1>Notícias</h1>
      </header>

      <main className="App-main">
        {cardNoticias()}
        {cardNoticias()}

      </main>

      <footer className="App-footer">
        <p>Copyright 2024 - Luiz Fernando</p>
      </footer>
    </div>
  );
}

export default App;
