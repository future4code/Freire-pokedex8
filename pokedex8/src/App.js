import './App.css'
import Router from './Router/Router';
import  GlobalState  from './Context/GlobalState';

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>

  );
}

export default App;
