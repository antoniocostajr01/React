import { Route, Routes } from 'react-router-dom';

import { Inicial, SobreNos } from './pages';

import { LayoutPadrao } from './layouts';


const Router= ( ) => {
     return (
          <Routes>
               <Route path="/" element={<LayoutPadrao/>} >
                    <Route patH="/" element={<Inicial />} />
                    <Route patH="/sobre-nos" element={<SobreNos />} />
               </Route>
          </Routes>
     )
};

export { Router } ;