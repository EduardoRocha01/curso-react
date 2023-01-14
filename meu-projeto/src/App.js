import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWords';

function App() {
  const name = 'mateus'

  return (
    <div className="App">
       <h1>Ola js!</h1>
       <p>estou aprendendo JS, que legal {name}</p>
       <HelloWord/>
      
    </div>
  );
}

export default App;
