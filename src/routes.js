import {Route, BrowserRouter, Routes} from 'react-router-dom'; 

import Home from './pages/home/home';
import Sobre from './pages/sobre/sobre';
import Erro from './pages/error/erro';

import Header from './components/header';

function RouteApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre/:id' element={<Sobre />} />
                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteApp;