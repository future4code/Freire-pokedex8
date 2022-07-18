import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Pokedex from '../Pages/Pokedex/Pokedex';
import DetailsPokemon from '../Pages/DetailsPokemon/DetailsPokemon';

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path='/pokedex' element={<Pokedex />}/>
                <Route path='/details' element={<DetailsPokemon />}/>
            </Routes>
        </BrowserRouter>
    )
}