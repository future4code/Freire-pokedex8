import './App.css'
import Router from './Router/Router';
import { PokemonState } from './Context/PokemonState';

function App() {
  return (
    <PokemonState>
      <Router />
    </PokemonState>

  );
}

export default App;
