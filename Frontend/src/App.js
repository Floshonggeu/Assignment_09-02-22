import logo from './logo.svg';
import './App.css';


const getresult= async () => {
  await fetch("http://localhost:3001")
    .then(res => res.json())
    .then(
      (result) => {
          return result

      },
      // Remarque : il est important de traiter les erreurs ici
      // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
      // des exceptions provenant de réels bugs du composant.
      (error) => {
        //this.setState({
        //  isLoaded: true,
        //  error
        //});
      }
    )
}

function App() {
  console.log(getresult());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
