import './App.css'
import Router from './Router/Router';
import { PokemonState } from './Context/PokemonState';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`

function App() {
  return (
    <PokemonState>
      <GlobalStyle/>
      <Router />
    </PokemonState>

  );
}

export default App;
