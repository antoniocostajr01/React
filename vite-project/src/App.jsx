import { BrowserRouter } from 'react-router-dom';

import { Cabecalho, Conteudo, Rodape } from './components';
import { Inicial } from './pages';

import './App.css'
import { Router } from './Router';

const App = ( ) => {
     return (
          <BrowserRouter>
               <Router/>
          </BrowserRouter>
     )
};

export { App };
